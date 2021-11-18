import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public loginInfo = new BehaviorSubject('');

  url = 'https://61925963aeab5c0017105f83.mockapi.io/api/v1/restaurantData';
  loginUrl = 'https://61925963aeab5c0017105f83.mockapi.io/api/v1/login_credentials';
  public isLoaderShow = false;
  isAuthenticate: boolean = false;

  constructor(
    private httpService: HttpClient
  ) { }

  ngOnInit(){
    var counter = 0;
    setInterval(function () {
      var frames = 19; var frameWidth = 30;
      var offset = counter * -frameWidth;
      document.getElementById("spinner").style.backgroundPosition =
        0 + "px" + " " + offset + "px";
      counter++; if (counter >= frames) counter = 0;
    }, 60);
  }

  checkAuthentication() {
    let authToken = window.localStorage.getItem('login_creds');
    if (authToken) {
      this.isAuthenticate = JSON.parse(authToken);
    }
    return this.isAuthenticate;
  }

  isLoader(){
    this.isLoaderShow = true;

    setTimeout(() => {
      this.isLoaderShow = false;
    }, 1000);
  }

  getRestrauList(){
    return this.httpService.get(this.url);
  }

  saveRestrauDetails(data: any){
    return this.httpService.post(this.url,data);
  }

  removeRestrauDetails(id: number){
    return this.httpService.delete(`${this.url}/${id}`);
  }

  getCurrentData(id: number){
    return this.httpService.get(`${this.url}/${id}`)
  }

  updateRestrau(id: number,data: any){
    return this.httpService.put(`${this.url}/${id}`,data)
  }

  getLoginCredentials(data: any){
    return this.httpService.post(this.loginUrl,data);
  }
  authUser(){
    return this.httpService.get(this.loginUrl);
  }
}
