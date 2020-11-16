import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { ScheduleNowComponent } from './modules/schedule-now/schedule-now.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ExistingCustomerComponent } from './modules/existing-customer/existing-customer.component';
import { NewCustomerComponent } from './modules/new-customer/new-customer.component';
import { ScheduleComponent } from './modules/schedule/schedule.component';
import { MovingTipsComponent } from './modules/moving-tips/moving-tips.component';
import { RatesComponent } from './modules/rates/rates.component';
import { FAQComponent } from './modules/faq/faq.component';
import { CareerComponent } from './modules/career/career.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { CareerApplyComponent} from './modules/career-apply/career-apply.component';
import {ApplyJob2Component} from './modules/apply-job2/apply-job2.component';
import {ApplyJob3Component} from './modules/apply-job3/apply-job3.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'home-page',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'home-page',
      component: HomeComponent,
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'contact-us',
      component: ContactUsComponent,
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'aboutus',
      component: AboutUsComponent,
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'schedule',
      component: ScheduleComponent,
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'moving',
      component: MovingTipsComponent,
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'rates',
      component: RatesComponent,
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'faq',
      component: FAQComponent,
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'career',
      component: CareerComponent,
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'career-apply',
      component: CareerApplyComponent,
    }]
  },
  {
  path: '',
  component: FullComponent,
  children: [
  {
    path: 'job2',
    component: ApplyJob2Component,
  }]
},
{
  path: '',
  component: FullComponent,
  children: [
  {
    path: 'job3',
    component: ApplyJob3Component,
  }]
},
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'schedule-now',
      component: ScheduleNowComponent,
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'existing-customer',
      component: ExistingCustomerComponent,
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
    {
      path: 'new-customer',
      component: NewCustomerComponent,
    }]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
