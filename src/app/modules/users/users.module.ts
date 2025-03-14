import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSingleComponent } from './components/user-single/user-single.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [UserListComponent, UserSingleComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SlickCarouselModule
  ]
})
export class UsersModule { }
