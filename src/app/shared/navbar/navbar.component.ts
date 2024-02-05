import { Component, DoCheck, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements DoCheck {
  @Input() user !: string;
  isLogged: boolean = false;
  visible: boolean = true;

  constructor(private router: Router) { }
  prevScrollpos = window.scrollY;

  ngOnInit(){
    console.log('previous', this.prevScrollpos)
  }

  // hide and show the navbar on the socroll event;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
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


}
