import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SlickCarouselModule
  ]
})
export class MovieModule { }
