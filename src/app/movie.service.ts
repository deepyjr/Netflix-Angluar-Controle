import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = environment.apiKey;
  constructor(private http: HttpClient) { }
  getMovie() {
    var temp = this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=Transformers`)    
    return temp
  }

  getRecentMovie() {
    var temp = this.http.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}`)
    return temp
  }

  getMovieData(id) {
    var temp = this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`)
    return temp
  }
}
