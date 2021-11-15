import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    userData: any;

    constructor(
        private commonService: CommonService
    ) { }

    ngOnInit(): void {
        this.prepareForm();
    }

    prepareForm() {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        })
    }

    authUser() {
        this.commonService.authUser().subscribe(el => {
            this.userData = el;
            let { username, password } = this.loginForm.getRawValue();

            const info = this.userData.findIndex(item => {
                return item.password === password && item.username === username;
            });

            if(info > -1){
              console.log("Success");
            } else {
              console.log("Failed");
            }
        });
    }
}