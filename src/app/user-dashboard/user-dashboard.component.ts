import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userInfo: any;
  userData: any;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    // this.commonService.loginInfo.subscribe(response => {
    // console.log("🚀 ~ file: user-dashboard.component.ts ~ line 19 ~ UserDashboardComponent ~ ngOnInit ~ response", response)
    //   this.userInfo = response;
    // })

    // this.userInfo = window.localStorage.getItem('userInfo');
    this.userData =  this.userInfo;
    console.log("🚀 ~ file: user-dashboard.component.ts ~ line 24 ~ UserDashboardComponent ~ ngOnInit ~ this.userInfo",this.userData);
  }

}
