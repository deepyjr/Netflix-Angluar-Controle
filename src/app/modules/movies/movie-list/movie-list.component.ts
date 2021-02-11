import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
 
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  
  showModal: boolean = false
  id;
  name;
  movies;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getRecentMovie().subscribe((value) => {
      value['results'].forEach(movie => {
        if (movie['backdrop_path'] === null) {
          value['results'].splice(value['results'].indexOf(movie), 1)
        } else {
          movie['backdrop_path'] = "https://image.tmdb.org/t/p/w500" + movie['backdrop_path']
        }
        
      })
      this.movies = value
    });
  }

  selectMovie(id, name) {
    this.id = id
    this.name = name
    this.showModal = true;
    
  }

  

}
