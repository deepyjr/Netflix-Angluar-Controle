import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {path:"", pathMatch:"full", component:HomeComponent},
  {path:"", loadChildren: () => import("./modules/movies/movie.module").then((response) => response.MovieModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
