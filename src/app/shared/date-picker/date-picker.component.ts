import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  selectedDay !: any;
  selectedMonth !: any;
  selectedYear !: number;

  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: number[] = [];
  daysInMonth: number[] = [];

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let i = 2020; i <= currentYear; i++) {
      this.years.push(i);
    }
    this.selectedYear = currentYear;

    this.selectedMonth = '';
    this.selectedDay = ''

    this.updateDays();
  }

  updateDays(): void {
    if(!this.selectedMonth) return;
    const days = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
    const selectedDay = this.selectedDay;
    if (typeof(selectedDay)=== 'number' && selectedDay > days) {
      this.selectedDay = ''
    }
  }
}
