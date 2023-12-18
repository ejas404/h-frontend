import { AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements DoCheck {
  flag = true

  constructor(private router : Router){}
  ngDoCheck(): void {
    this.flag = this.router.url === '/profile' ? false : true;
  }
}
