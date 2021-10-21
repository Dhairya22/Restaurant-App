import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  restrauList: any;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.updateRestrauList();
  }

  // updateList(data: any,id: number){
  // console.log("🚀 ~ file: list-restaurant.component.ts ~ line 24 ~ ListRestaurantComponent ~ updateList ~ id", id)
  // console.log("🚀 ~ file: list-restaurant.component.ts ~ line 24 ~ ListRestaurantComponent ~ updateList ~ data", data)

  // }

  updateRestrauList(){
    this.commonService.getRestrauList().subscribe(res => {
      console.log("🚀 ~ file: list-restaurant.component.ts ~ line 29 ~ ListRestaurantComponent ~ this.commonService.getRestrauList ~ res", res)
      this.restrauList = res;
    })
  }

  onRemove(id){
    this.restrauList.splice(id.id,-1);
    this.commonService.removeRestrauDetails(id).subscribe(el => {
    console.log("🚀 ~ file: list-restaurant.component.ts ~ line 26 ~ ListRestaurantComponent ~ this.commonService.removeRestrauDetails ~ el", el);
    this.updateRestrauList();
    })
  }

  // deleteResto(resto){
  //   this.collection.splice(resto.id,-1)
  //   this.commonService.deleteResto(resto).subscribe((result)=>{
  //     console.log("Data is Deleted Successfull !", result)
  //     this.alert= true;
  //   })
  // }

}
