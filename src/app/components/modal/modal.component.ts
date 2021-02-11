import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core'
import { MovieService } from 'src/app/movie.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output()
  onClose = new EventEmitter();

  @Input() id:string
  @Input() name:string

  constructor(private route: ActivatedRoute, private movieService: MovieService, private dom:DomSanitizer) { }
  movieData
  trailer

  ngOnInit(): void {
      this.movieService.getMovieData(this.id).subscribe((value) => {
      value['backdrop_path'] = "https://image.tmdb.org/t/p/w500" + value['backdrop_path']

        this.movieData = value
      })
      this.movieService.getTrailer(this.name).subscribe((value) => {
        console.log(this.name)
        value['items'][0]['id']['videoLink'] = this.dom.bypassSecurityTrustResourceUrl("https://youtube.com/embed/" + value['items'][0]['id']['videoId'])
        this.trailer = value['items'][0]
      })
  }

  cancel() { 
    this.onClose.emit(null); 
  }
}
