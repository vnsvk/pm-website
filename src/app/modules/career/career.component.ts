import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  goToCareersApply(){
this._router.navigate(['/career-apply']);
  }
    goToApplyJob2(){
this._router.navigate(['/job2']);
  }
  goToApplyJob3(){
    this._router.navigate(['/job3']);
      }
}
