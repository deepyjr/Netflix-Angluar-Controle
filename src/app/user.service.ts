import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "https://api.github.com/users";
  apiKey = environment.apiKey;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }

  getUser(username:string) {
    return this.http.get(`${this.apiUrl}/${username}`)
  }

  getMovie() {
    var temp = this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=Transformers`)    
    return temp
  }

  getRecentMovie() {
    var temp = this.http.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}`)
    return temp
  }
}
