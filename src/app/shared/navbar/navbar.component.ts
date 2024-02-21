import { Component, DoCheck, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseConfigService } from 'app/core/services/shared/firebase_config_srevice';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements DoCheck {

  @Input() user !: string;
  destroy$ !: Subscription;
  destroySub$ = new Subject<void>()
  isLogged: boolean = false;
  visible: boolean = true;

  constructor(
    private router: Router,
    private fcmConfig : FirebaseConfigService,
    private afMessaging: AngularFireMessaging
    ) { }
  prevScrollpos = window.scrollY;

  ngOnInit(){
   this.subscribeFirebase()
  }

  // hide and show the navbar on the socroll event;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScrollPos = window.scrollY;
    if (this.prevScrollpos > currentScrollPos) this.visible = true;  
    else this.visible = false;
    this.prevScrollpos = currentScrollPos;
  }

  ngDoCheck(): void {
    let currentUrl = this.router.url

    if (currentUrl.includes('profile')) {
      this.isLogged = true
    } else {
      this.isLogged = false
    }
  }

  subscribeFirebase(){
    this.destroy$ = this.fcmConfig.isAction.subscribe({
      next : res => {
        if(res === true){
          this.serverNotification()
        }else{
          this.destroySub$.next()
          this.destroySub$.complete()
        }
      }
    })
  }

  serverNotification(){
    this.afMessaging.messages
    .pipe(takeUntil(this.destroySub$))
    .subscribe((msg) => {
        alert('server side messages')
        console.log(msg)
    });
  }

  ngOnDestroy(){
    this.destroy$.unsubscribe()
  }

}
