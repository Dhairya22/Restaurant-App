import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url = 'http://localhost:3000/restrau';

  constructor(
    private httpService: HttpClient
  ) { }

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
}
