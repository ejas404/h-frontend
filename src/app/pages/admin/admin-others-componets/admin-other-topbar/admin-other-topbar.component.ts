import { Component } from '@angular/core';

@Component({
  selector: 'admin-other-topbar',
  templateUrl: './admin-other-topbar.component.html',
  styleUrl: './admin-other-topbar.component.scss'
})
export class AdminOtherTopbarComponent {
  otherComponents : {title : string, path : string}[] = [
    {title : 'upcoming courses', path :'upcoming-courses'},
    {title : 'account', path :'account'}
  ] 
}
