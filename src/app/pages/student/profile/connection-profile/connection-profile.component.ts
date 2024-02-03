import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectionsResponse } from 'app/core/models/server_response_model';
import { StudentConnectionService } from 'app/core/services/student/student_connection_service';
import { ChatboxSharedComponent } from 'app/shared/chatbox-shared/chatbox-shared.component';
import { Subject, pipe, takeUntil } from 'rxjs';

@Component({
  selector: 'app-connection-profile',
  templateUrl: './connection-profile.component.html',
  styleUrl: './connection-profile.component.scss',
  providers: [StudentConnectionService]
})
export class ConnectionProfileComponent {
  destroy$ = new Subject<void>()
  connList !: ConnectionsResponse[];

  constructor(
    private connService: StudentConnectionService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit() {
    this.fetchConnections()
  }
  fetchConnections() {
    this.connService.getConnections()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.connList = res.connections
        },
        error: err => {
          console.log(err)
        }
      })
  }

  message(id: string) {
    this.dialogRef.open(ChatboxSharedComponent, {
      width: '500px',
      height: '500px',
      data: { id }
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
  }

}
