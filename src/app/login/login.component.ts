import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reqData = {

    "userName": "",
    "password": ""
  }
  public showError: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }



  login(): void {
    console.log("hi from login");

    if (this.reqData.userName && this.reqData.password) {
      localStorage.setItem("login", "true");
      localStorage.setItem("username", this.reqData.userName);
      this.router.navigate(['/home']);

    }
  }

}
