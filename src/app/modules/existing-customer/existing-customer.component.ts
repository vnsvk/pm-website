import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiEndpoints } from './../../config/api.endpoints';
import { DataService } from 'src/app/services/data.service';
import { CustomerDetailsService } from 'src/app/services/customer-details.service';

@Component({
  selector: 'app-existing-customer',
  templateUrl: './existing-customer.component.html',
  styleUrls: ['./existing-customer.component.css']
})
export class ExistingCustomerComponent implements OnInit {

  existingCustomerFormGroup: FormGroup = new FormGroup({});
  // otpFormGroup: FormGroup = new FormGroup({});
  apiEndpoint: string = ApiEndpoints.API_ENDPOINT;

  showCustomerDetails: boolean = true;
  // showOTPDetails: boolean = false;
  error: any;

  constructor(private routes: Router, private dataService: DataService, private customerService: CustomerDetailsService) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.existingCustomerFormGroup.addControl('mobile', new FormControl('', [Validators.required]));
    // this.otpFormGroup.addControl('otp', new FormControl('', [Validators.required]));
  }

  submit() {
    const formValues = this.existingCustomerFormGroup.value;

    const url = this.apiEndpoint + 'DashboardApiController/GetCustomer?phone='+ formValues.mobile;
    this.dataService.get(url).subscribe((data)=>{
      if(data !== null && data !== undefined) {
        this.customerService.saveCustomerDetails(data);
        // this.showCustomerDetails = false;
        // this.showOTPDetails = true;
        this.redirectToSchedule();
      }
      else  {
        this.error = 'invalid';
        this.existingCustomerFormGroup.controls['mobile'].setErrors({ 'invalid': true });
      }
    }, (error) => {
      this.error = 'invalid';
      this.existingCustomerFormGroup.controls['mobile'].setErrors({ 'invalid': true });
    });
  }

  // verify() {
  //   const formValues = this.otpFormGroup.value;
  //   const otpObject = {
  //     otp: formValues.otp
  //   }

  //   const url = this.apiEndpoint + 'VerifyOTP';
  //   this.dataService.post(url, otpObject).subscribe((data)=>{
  //     this.redirectToSchedule();
  //   }, (error) => {
      
  //   });
  // }

  redirectToSchedule() {
    this.routes.navigate(['/schedule-now']);
  }

}
