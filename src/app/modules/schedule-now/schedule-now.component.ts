import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from "igniteui-angular";
import { DatePipe } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ApiEndpoints } from 'src/app/config/api.endpoints';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VALIDATE_ALPHA_NUMERIC_PATTERN } from 'src/app/config/app.constants';
import { CustomerDetailsService } from 'src/app/services/customer-details.service';

@Component({
  selector: 'app-schedule-now',
  templateUrl: './schedule-now.component.html',
  styleUrls: ['./schedule-now.component.scss']
})
export class ScheduleNowComponent implements OnInit {

  @ViewChild("calendar", { static: true }) public calendar: IgxCalendarComponent;
  public locale: any = "EN";
  apiEndpoint = ApiEndpoints.API_ENDPOINT;
  messageFormGroup: FormGroup = new FormGroup({});
  scheduleList: any[] = [];
  filteredScheduleList: any[] = [];
  showTimeSlot: boolean = false;
  scheduleDate: any;
  startDate: any;
  endDate: any;
  customerData: any;

  firstSlot: boolean = false;
  secondSlot: boolean = false;
  thirdSlot: boolean = false;
  fourthSlot: boolean = false;
  fifthSlot: boolean = false;
  sixthSlot: boolean = false;
  seventhSlot: boolean = false;
  eightSlot: boolean = false;
  ninthSlot: boolean = false;
  tenthSlot: boolean = false;
  eleventSlot: boolean = false;
  twelthSlot: boolean = false;

  constructor(private routes: Router, private dataService: DataService, private datePipe: DatePipe, private customerService: CustomerDetailsService) {
    this.customerData = this.customerService.getCustomerDetails();
  }

  ngOnInit(): void {
    if(this.customerData !== undefined) {
      this.resetAll();
      this.getScheduleList();
      this.formInitialize();
    }
    else {
      this.redirectToSchedule();
    }
  }

  formInitialize() {
    this.messageFormGroup.addControl('message', new FormControl('', [Validators.required, Validators.pattern(VALIDATE_ALPHA_NUMERIC_PATTERN)]));
  }

  getScheduleList() {
    const url = this.apiEndpoint + 'JobForApprovals';
     this.dataService.get(url).subscribe(scheduleData => {
      this.scheduleList = scheduleData;
     }, (error) => {
      
     });
  }

  onSelection(date: Date) {
    // alert the user
    const formattedDate = this.datePipe.transform(new Date(date), 'yyyy-MM-dd');
    this.scheduleDate = formattedDate;
    this.filterSchedule(formattedDate);
    this.showTimeSlot = true;
  }

  filterSchedule(date) {
    this.scheduleList.forEach(element => {
      const everyDate = this.splitDate(element.StartDatetime, element.EndDatetime);
      const everyTime = this.splitTime(element.StartDatetime, element.EndDatetime);
      const timeSlotObject = {
        startDate: everyDate.startDate,
        endDate: everyDate.endDate,
        startTime: everyTime.startTime,
        endTime: everyTime.endTime
      }
      this.filteredScheduleList.push(timeSlotObject);
    });
    this.filteredScheduleList = this.filteredScheduleList.filter(x => x.startDate == date);
    this.resetAll();
    this.filteredScheduleList.forEach(element => {
      const splitTime = element.startTime.split(":");
      const splittedTime = splitTime[0];
      this.makeScheduleHide(splittedTime);
    });
  }

  splitDate(startDate, endDate) {
    const startDateTime = startDate;
    const startSplittedDate = this.datePipe.transform(startDateTime, 'yyyy-MM-dd');

    const endDateTime = endDate;
    const endSplittedDate = this.datePipe.transform(endDateTime, 'yyyy-MM-dd');

    return {startDate: startSplittedDate, endDate: endSplittedDate}
  }

  splitTime(startDate, endDate) {
    const startDateTime = startDate;
    const startSplittedTime = this.datePipe.transform(startDateTime, 'HH:mm:ss');

    const endDateTime = endDate;
    const endSplittedTime = this.datePipe.transform(endDateTime, 'HH:mm:ss');

    return {startTime: startSplittedTime, endTime: endSplittedTime}
  }

  makeScheduleHide(timeSlot) {
    switch (timeSlot) {
      case "09":
        this.firstSlot = true;
        break;
      case "10":
        this.secondSlot = true;
        break;
      case "11":
        this.thirdSlot = true;
        break;
      case "12":
        this.fourthSlot = true;
        break;
      case "13":
        this.fifthSlot = true;
        break;
      case "14":
        this.sixthSlot = true;
        break;
      case "15":
        this.seventhSlot = true;
        break;
      case "16":
        this.eightSlot = true;
        break;
      case "17":
        this.ninthSlot = true;
        break;
      case "18":
        this.tenthSlot = true;
        break;
      case "19":
        this.eleventSlot = true;
        break;
      case "20":
        this.twelthSlot = true;
        break;
    }
  }

  resetAll() {
    this.firstSlot = false;
    this.secondSlot = false;
    this.thirdSlot = false;
    this.fourthSlot = false;
    this.fifthSlot = false;
    this.sixthSlot = false;
    this.seventhSlot = false;
    this.eightSlot = false;
    this.ninthSlot = false;
    this.tenthSlot = false;
    this.eleventSlot = false;
    this.twelthSlot = false;
  }

  timeSlot(start, end) {
    var startDateTime = `${this.scheduleDate}T${start}:00:00`;
    var endDateTime = `${this.scheduleDate}T${end}:00:00`;
    var startFormat = new Date(startDateTime);
    var endFormat = new Date(endDateTime);
    this.startDate = this.datePipe.transform(startFormat, 'yyyy-MM-ddTHH:mm:ss');    
    this.endDate = this.datePipe.transform(endFormat, 'yyyy-MM-ddTHH:mm:ss');
  }

  submit() {
    const formValues = this.messageFormGroup.value;
    const customerDetails = this.customerData;
    const scheduleObject = {
      CustomerName: `${customerDetails.FirstName} ${customerDetails.LastName}`,
      Message: formValues.message,
      StartDatetime: this.startDate,
      EndDatetime: this.endDate,
      Email: customerDetails.Email,
      Mobile: customerDetails.MobileNo
    }
    console.log('scheduleObject', scheduleObject);

    const url = this.apiEndpoint + 'JobForApprovals';
    this.dataService.post(url, scheduleObject).subscribe((data)=>{
      this.back();
    }, (error) => {
      
    });
  }

  redirectToSchedule() {
    this.routes.navigate(['/schedule']);
  }

  back() {
    this.routes.navigate(['/home-page']);
  }

}
