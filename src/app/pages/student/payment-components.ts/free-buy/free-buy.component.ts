import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentEnrollService } from 'app/core/services/student/student_enroll_service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-free-buy',
  templateUrl: './free-buy.component.html',
  styleUrl: './free-buy.component.scss',
  providers : [StudentEnrollService]
})
export class FreeBuyComponent {

  success !: boolean
  sub$ !: Subscription;

  constructor(
    private activatedRoute : ActivatedRoute,
    private enrollService : StudentEnrollService
  ){}

  ngOnInit(){
    const enid = this.activatedRoute.snapshot.params['id']
    if(!enid) this.success = false;
    this.sub$ = this.enrollService.isEnrolled(enid).subscribe({
      next : res =>{
        this.success = res.success
      },
      error : err =>{
        console.log(err)
        this.success = false
      }
    })
    
  }

  ngOnDestroy(){
    this.sub$.unsubscribe()
  }
}
