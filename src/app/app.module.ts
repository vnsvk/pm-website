import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { ScheduleNowComponent } from './modules/schedule-now/schedule-now.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ExistingCustomerComponent } from './modules/existing-customer/existing-customer.component';
import { NewCustomerComponent } from './modules/new-customer/new-customer.component';
import { ScheduleComponent } from './modules/schedule/schedule.component';
import { IgxCalendarModule } from "igniteui-angular";
import { DataService } from './services/data.service';
import { CustomerDetailsService } from './services/customer-details.service';
import { MovingTipsComponent } from './modules/moving-tips/moving-tips.component';
import { RatesComponent } from './modules/rates/rates.component';
import { FAQComponent } from './modules/faq/faq.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { CareerApplyComponent } from './modules/career-apply/career-apply.component';
import { ApplyJob2Component } from './modules/apply-job2/apply-job2.component';
import { ApplyJob3Component } from './modules/apply-job3/apply-job3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FullComponent,
    HomeComponent,
    ContactUsComponent,
    ScheduleNowComponent,
    SignUpComponent,
    LoginComponent,
    ExistingCustomerComponent,
    NewCustomerComponent,
    ScheduleComponent,
    MovingTipsComponent,
    RatesComponent,
    FAQComponent,
    AboutUsComponent,
    CareerApplyComponent,
    ApplyJob2Component,
    ApplyJob3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    IgxCalendarModule
  ],
  providers: [DatePipe, DataService, CustomerDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
