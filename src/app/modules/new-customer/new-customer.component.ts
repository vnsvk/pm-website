import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiEndpoints } from './../../config/api.endpoints';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  newCustomerFormGroup: FormGroup = new FormGroup({});
  apiEndpoint: string = ApiEndpoints.API_ENDPOINT;
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  
  constructor(private routes: Router, private dataService: DataService) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.newCustomerFormGroup.addControl('firstName',new FormControl('', [Validators.required]));
    this.newCustomerFormGroup.addControl('lastName', new FormControl('', [Validators.required]));
    this.newCustomerFormGroup.addControl('mobileNo', new FormControl('', [Validators.required]));
    this.newCustomerFormGroup.addControl('email', new FormControl('', [Validators.required]));
    this.newCustomerFormGroup.addControl('company', new FormControl('', [Validators.required]));
    this.newCustomerFormGroup.addControl('workPhone', new FormControl(''));
    this.newCustomerFormGroup.addControl('customertype', new FormControl(''));
    this.newCustomerFormGroup.addControl('houseNo', new FormControl('', [Validators.required]));
    this.newCustomerFormGroup.addControl('street', new FormControl('', [Validators.required]));
    this.newCustomerFormGroup.addControl('city', new FormControl('', [Validators.required]));
    this.newCustomerFormGroup.addControl('state', new FormControl('', [Validators.required]));
    this.newCustomerFormGroup.addControl('jobTitle', new FormControl(''));
    this.newCustomerFormGroup.addControl('county', new FormControl(''));
    this.newCustomerFormGroup.addControl('country', new FormControl('', [Validators.required]));
    this.newCustomerFormGroup.addControl('pincode', new FormControl('', [Validators.required]));
  }

  submit(customer: NewCustomerDetailsModel) {
    const url = this.apiEndpoint + 'CustomerForApprovals';
    this.dataService.post(url, customer).subscribe((data)=>{
      this.redirectToVerify();
    }, (error) => {
      
    });
  }

  clear() {
    this.newCustomerFormGroup.reset();
  }

  redirectToVerify() {
    this.routes.navigate(['/existing-customer']);
  }

}

export class NewCustomerDetailsModel{
  id:string;
  firstName:string;
  lastName:string;
  email:string;
  mobileNo:string;
  company:string;
  workPhone:string;
  houseNo:string;
  street:string;
  city:string;
  state:string;
  pinCode:string;
  country:string;
}
