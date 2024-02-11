import { Component, ViewChild } from '@angular/core';
import { HomePageCourseService } from '../../../../core/services/home/homepage-course';
import { CourseDetailsResponse } from '../../../../core/models/course';
import { Subject, takeUntil } from 'rxjs';
import { SwiperOptions, Virtual } from 'swiper';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Virtual]);

@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrl: './home-courses.component.scss',
  providers: [HomePageCourseService]
})
export class HomeCoursesComponent {

  private destroy$ = new Subject<void>();

  courses !: CourseDetailsResponse[];

  constructor(private service : HomePageCourseService){}

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext(){
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  }

  ngOnInit(){
    this.fertchCourseDetails()
  }

  fertchCourseDetails(){
    this.service.getCourses()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next : data =>{
        this.courses = data.courses
      },
      error : err =>{

      }
    })
  }

  
  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

}
