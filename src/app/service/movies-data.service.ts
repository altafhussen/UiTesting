import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private http: HttpClient) { }

  getMoviesData(key):Observable<any> {

    let api = `http://www.omdbapi.com/?s=Batman&page=2&apikey=${key}`;

    return this.http.get<any>(api);
  }
}
