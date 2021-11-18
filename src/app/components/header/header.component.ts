import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.loginInfo.subscribe( response => {
      console.log("🚀 ~ file: home.component.ts ~ line 18 ~ HomeComponent ~ ngOnInit ~ response", response)
      })
  }

  logoutPage(){
    this.commonService.isAuthenticate = false;
    this.router.navigate(['login']);
  }

}
