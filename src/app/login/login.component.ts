import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiEndpoints } from './../config/api.endpoints';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  apiEndpoint: string = ApiEndpoints.API_ENDPOINT;

  constructor(private routes: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.formControls();
  }

  formControls() {
    this.loginForm.addControl('userName', new FormControl('', [Validators.required]));
    this.loginForm.addControl('password', new FormControl('', [Validators.required]));
  }

  login() {
    const loginFormValues = this.loginForm.value;
    const contactObject = {
      userName: loginFormValues.userName,
      password: loginFormValues.password
    }

    const url = this.apiEndpoint + 'Login';
    this.dataService.post(url, contactObject).subscribe((data)=>{
      this.redirectToHome();
    }, (error) => {
      
    });
  }

  redirectToHome() {
    this.routes.navigate(['/home-page']);
  }

}
