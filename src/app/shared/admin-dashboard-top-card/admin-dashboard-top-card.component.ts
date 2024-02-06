import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-dashboard-top-card',
  templateUrl: './admin-dashboard-top-card.component.html',
  styleUrl: './admin-dashboard-top-card.component.scss'
})
export class AdminDashboardTopCardComponent {
  @Input() title !: string;
  @Input() count : number = 0;
  bg !: string;
  text !: string;
  border !: string;
  icon !: string;

  ngOnInit(){
    if(this.title === 'students'){
      this.bg = 'bg-blue-300'
      this.border = 'border-blue-300'
      this.text = 'text-blue-700'
      this.icon = 'bootstrapPersonFill'
    }

    if(this.title === 'tutors'){
      this.bg = 'bg-red-300'
      this.border = 'border-red-300'
      this.text = 'text-red-700',
      this.icon = 'bootstrapMortarboardFill'
    }

    if(this.title === 'courses'){
      this.bg = 'bg-amber-300'
      this.border = 'border-amber-300'
      this.text = 'text-amber-700'
      this.icon = 'bootstrapBookFill'
    }


  }

}
