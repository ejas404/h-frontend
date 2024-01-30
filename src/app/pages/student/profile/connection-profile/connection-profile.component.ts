import { Component } from '@angular/core';
import { ConnectionsResponse } from 'app/core/models/server_response_model';
import { StudentConnectionService } from 'app/core/services/student/student_connection_service';
import { Subject, pipe, takeUntil } from 'rxjs';

@Component({
  selector: 'app-connection-profile',
  templateUrl: './connection-profile.component.html',
  styleUrl: './connection-profile.component.scss',
  providers : [StudentConnectionService]
})
export class ConnectionProfileComponent {
  destroy$ = new Subject<void>()
  connList !: ConnectionsResponse[];

  constructor(
    private connService : StudentConnectionService
  ){}

  ngOnInit(){
    this.fetchConnections()
  }
  fetchConnections(){
    this.connService.getConnections()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : res =>{
        this.connList = res.connections
      },
      error : err => {
        console.log(err)
      }
    })
  }

  message(id : string){

  }

  ngOnDestroy(){
    this.destroy$.next()
  }

}
