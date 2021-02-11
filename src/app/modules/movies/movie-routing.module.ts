import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSingleComponent } from './movie-single/movie-single.component'

const routes: Routes = [
  {path:'', component:MovieListComponent},
  {path:':id', component:MovieSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
