import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiEndpoints } from './../../config/api.endpoints';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactFormGroup: FormGroup = new FormGroup({});
  apiEndpoint: string = ApiEndpoints.API_ENDPOINT;

  constructor(private routes: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.contactFormGroup.addControl('name', new FormControl('', [Validators.required]));
    this.contactFormGroup.addControl('email', new FormControl('', [Validators.required]));
    this.contactFormGroup.addControl('subject', new FormControl('', [Validators.required]));
    this.contactFormGroup.addControl('phone', new FormControl('', [Validators.required]));
    this.contactFormGroup.addControl('message', new FormControl('', [Validators.required]));
  }

  submit() {
    const formValues = this.contactFormGroup.value;
    const contactObject = {
      name: formValues.name,
      email: formValues.email,
      subject: formValues.subject,
      message: formValues.message
    }

    const url = this.apiEndpoint + 'CustomerFeedBack';
    this.dataService.post(url, contactObject).subscribe((data)=>{
      this.back();
    }, (error) => {
      
    });
  }

  clear() {
    this.contactFormGroup.reset();
  }

  back() {
    this.routes.navigate(['/home-page']);
  }

}
