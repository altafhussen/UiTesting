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


  constructor(private router: Router) {
   
  }

  ngOnInit() {
  }

  

  login() {
    console.log("hi from login");
    this.router.navigate(['/home']);
    localStorage.setItem("login", "true");
    localStorage.setItem("username", this.reqData.userName);
  }

}
