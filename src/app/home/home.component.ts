import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesDataService } from '../service/movies-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;
  public apiKey: string = 'bfe05474';
  constructor(private router: Router, private moviesData: MoviesDataService) { }

  ngOnInit() {
    if (localStorage.getItem("login") == null) {
      this.router.navigate(["/login"])
    }


    this.moviesData.getMoviesData(this.apiKey).subscribe(
      data => {
        this.data = data.Search;
        console.log(data, this.data);
      }

    )
  }


  logout() {
    console.log("hi frm Logout");
    this.router.navigate(['/login']);
    localStorage.removeItem("login");
    localStorage.removeItem("username")
  }

}
