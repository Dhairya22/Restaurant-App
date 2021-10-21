import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  btnTitle = 'Submit'
  restaurantForm!: FormGroup;
  showAlert: boolean = false;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.prepareForm();

    console.log("hello");


    this.commonService.getCurrentData(this.aRoute.snapshot.params.id).subscribe (res => {
      console.log("🚀 ~ file: add-restaurant.component.ts ~ line 27 ~ AddRestaurantComponent ~ this.commonService.getCurrentData ~ res", res)
      if(this.aRoute.snapshot.params.id > 0 ) {
        this.restaurantForm = new FormGroup({
          name: new FormControl(res['name']),
          address: new FormControl(res['address']),
          contact: new FormControl(res['contact']),
          email: new FormControl(res['email'])
        })
        this.btnTitle = 'Update';
      }
      console.log("🚀 ~ file: update-restaurant.component.ts ~ line 27 ~ UpdateRestaurantComponent ~ this.commonService.getCurrentData ~ res", res)
    })
  }

  prepareForm(){
    this.restaurantForm = new FormGroup({
      name: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      contact: new FormControl(0,Validators.required),
      email: new FormControl('',Validators.required)
    })
  }

  onSubmit(){

    console.log("started");

    if(this.aRoute.snapshot.params.id){
      console.log("if");

      this.commonService.updateRestrau(this.aRoute.snapshot.params.id,this.restaurantForm.value).subscribe( res => {
        console.log("🚀 ~ file: add-restaurant.component.ts ~ line 61 ~ AddRestaurantComponent ~ this.commonService.updateRestrau ~ res", res)
        this.router.navigate(['/list-restaurant'])
      })

      // this.commonService.saveRestrauDetails(this.restaurantForm.value).subscribe(el => {
      //   this.showAlert = true;
      //   this.restaurantForm.reset({});
      // })
    } else {
      console.log("bye");

      this.commonService.saveRestrauDetails(this.restaurantForm.value).subscribe(el => {
        this.showAlert = true;
        this.restaurantForm.reset({});
      })
      // this.commonService.updateRestrau(this.aRoute.snapshot.params.id,this.restaurantForm.value).subscribe( res => {
      //   console.log("🚀 ~ file: add-restaurant.component.ts ~ line 61 ~ AddRestaurantComponent ~ this.commonService.updateRestrau ~ res", res)
      //   this.router.navigate(['/list-restaurant'])
      // })
    }

  }
}
