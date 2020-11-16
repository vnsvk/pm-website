import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  customerData: any;

  constructor() { }

  saveCustomerDetails(data: any) {
    this.customerData = data;
  }

  getCustomerDetails() {
    return this.customerData;
  }

}
