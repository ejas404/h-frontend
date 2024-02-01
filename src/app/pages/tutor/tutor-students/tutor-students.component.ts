import { Component } from '@angular/core';
import { ConnectionsResponse } from 'app/core/models/server_response_model';
import { TutorConnectionService } from 'app/core/services/tutor/tutor_connection_service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tutor-students',
  templateUrl: './tutor-students.component.html',
  styleUrl: './tutor-students.component.scss',
  providers : [TutorConnectionService]
})
export class TutorStudentsComponent {

  destroy$ = new Subject<void>()
  connList !: ConnectionsResponse[];


  constructor(
    private connService : TutorConnectionService
  ){}

  ngOnInit(){
    this.fetchConnections()
  }
  fetchConnections(){
    this.connService.getConnections()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res => {
        console.log('connections printing')
        console.log(res.connections)
        this.connList = res.connections
      },
      error : err => {
        console.log(err)
      }
    })
  }

  message(_id : string){

  }

  ngOnDestroy(){
    this.destroy$.next()
  }

}
