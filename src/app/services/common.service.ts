import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url = 'https://61925963aeab5c0017105f83.mockapi.io/api/v1/restaurantData';
  public isLoaderShow = false;

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
    return this.httpService.post("https://retoolapi.dev/Zl7Up0/login_credentials",data);
  }
  authUser(){
    return this.httpService.get("https://retoolapi.dev/Zl7Up0/login_credentials");
  }
}
