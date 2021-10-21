import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  restaurantForm!: FormGroup;
  showAlert: boolean = false;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.prepareForm();
    console.log(this.aRoute.snapshot.params.id);

    this.commonService.getCurrentData(this.aRoute.snapshot.params.id).subscribe (res => {
      console.log("🚀 ~ file: update-restaurant.component.ts ~ line 27 ~ UpdateRestaurantComponent ~ this.commonService.getCurrentData ~ res", res)
      this.restaurantForm = new FormGroup({
        name: new FormControl(res['name']),
        address: new FormControl(res['address']),
        contact: new FormControl(res['contact']),
        email: new FormControl(res['email'])
      })
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
    this.commonService.updateRestrau(this.aRoute.snapshot.params.id,this.restaurantForm.value).subscribe( res => {
      this.router.navigate(['/list-restaurant'])
    })
  }

}
