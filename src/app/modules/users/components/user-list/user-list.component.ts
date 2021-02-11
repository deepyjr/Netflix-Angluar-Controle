import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  users;
  movies;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.userService.getRecentMovie().subscribe((value) => {
      value['results'].forEach(movie => {
        if (movie['backdrop_path'] === null) {
          value['results'].splice(value['results'].indexOf(movie), 1)
        } else {
          movie['backdrop_path'] = "https://image.tmdb.org/t/p/w500" + movie['backdrop_path']
        }
        
      })
      this.movies = value
      console.log(this.movies)
    });
      

  }

}
