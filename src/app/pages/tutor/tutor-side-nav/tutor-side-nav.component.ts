import { Component } from '@angular/core';

@Component({
  selector: 'tutor-side-nav',
  templateUrl: './tutor-side-nav.component.html',
  styleUrl: './tutor-side-nav.component.scss'
})
export class TutorSideNavComponent {
  navList : {path : string,icon : string}[] = [
    {path : '/tutor',icon : 'bootstrapBarChartLineFill'},
    {path : '/tutor/courses',icon : 'bootstrapFileEarmarkMedicalFill'},
    {path : '/tutor/students',icon : 'bootstrapPeopleFill'},
    {path : '/tutor/notifications',icon : 'bootstrapBellFill'},
  ]
}
