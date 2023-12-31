import { Component, DoCheck, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements DoCheck{
  @Input()user !:string;
  isLogged : boolean  = false;

  constructor(private router : Router){}

  ngDoCheck(): void {
    let currentUrl = this.router.url

    if(currentUrl.includes('profile')){
      this.isLogged = true
    }else{
      this.isLogged = false
    }
  }
}
