import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontendAng';
  
  constructor(
    private socket : Socket
  ){}

  ngOnInit(){
    this.socket.on("connect_error",(err : any) =>{
      console.log('error printing')
      console.log(err.message)
      console.log(err.description)
      console.log(err.context)
    })
  }

}
