import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesDataService } from '../service/movies-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: object[];

  public query: string;
  public showGridView: boolean;
  public showListView: boolean;
  constructor(private router: Router, private moviesData: MoviesDataService) { }

  ngOnInit() {
    this.showGridView = true;
    this.showListView = false;
    console.log("hi");
    if (!localStorage.getItem("login")) {
      this.router.navigate(["/login"])
    }


    this.moviesData.getMoviesData().subscribe(
      data => {
        this.data = data.Search;
        console.log(data, this.data);
      }
    )
  }

  search(): void {
    this.data = this.data.filter((ser: { Title: string; }) => {
      return ser.Title.toLocaleLowerCase().includes(this.query.toLocaleLowerCase());
    })
    console.log(this.data)

  }


  sortByName(): void {
    this.data.sort(this.compare);
  }


  compare(a: { Title: string; }, b: { Title: string; }) {
    const bandA = a.Title.toUpperCase();
    const bandB = b.Title.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }



  logout(): void {
    console.log("hi frm Logout");
    this.router.navigate(['/login']);
    localStorage.removeItem("login");
    localStorage.removeItem("username")
  }

  listView(): void {
    this.showListView = true;
    this.showGridView = false;
  }
  gridView(): void {
    this.showListView = false;
    this.showGridView = true;

  }

}
