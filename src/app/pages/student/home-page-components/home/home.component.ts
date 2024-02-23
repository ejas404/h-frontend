import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isStudentToken } from 'app/core/utils/check_token';
import { jwtDecode } from 'jwt-decode';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  user: string = 'student'
  sub !: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router : Router
    ) { }


  ngOnInit(): void {
    this.user = isStudentToken() ? 'profile' : this.user;
    this.sub = this.route.queryParams.subscribe((params) => {
  
      if(params['mtid']){
        this.router.navigateByUrl(`/payment/check/${params['mtid']}`)
      }

      
      if(params['code']){
        this.router.navigateByUrl(`/oauth?code=${params['mtid']}`)
      }

    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
