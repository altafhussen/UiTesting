import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/model/movieDetails.model'

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private http: HttpClient) { }

  getMoviesData():Observable<Movies> {

    let api = `http://www.omdbapi.com/?s=Batman&page=2&apikey=bfe05474`;

    return this.http.get<Movies>(api);
  }
}
