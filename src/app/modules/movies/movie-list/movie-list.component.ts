import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

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

}
