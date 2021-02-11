import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.css']
})
export class MovieSingleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }
  movieData

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.movieService.getMovieData(id).subscribe((value) => {
      value['backdrop_path'] = "https://image.tmdb.org/t/p/w500" + value['backdrop_path']

        this.movieData = value
        console.log("bla")
      })
      
    })
  }

}
