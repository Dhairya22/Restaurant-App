import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    userData: any;

    password;

    show = false;

    public showPassword: boolean;
    public showPasswordOnPress: boolean;

    constructor(
        private commonService: CommonService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.prepareForm();
    }

    prepareForm() {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    authUser() {
        this.commonService.authUser().subscribe(el => {
            this.userData = el;
            // this.commonService.loginInfo.next(this.loginForm.value);
            window.localStorage.setItem('userInfo', JSON.stringify(this.loginForm.value))
            let { username, password } = this.loginForm.getRawValue();

            const info = this.userData.findIndex(item => {
            console.log("🚀 ~ file: login.component.ts ~ line 39 ~ LoginComponent ~ this.commonService.authUser ~ item", item)
                return item.password === password && item.username === username;
            });

            if (info > -1) {
                console.log("Success");
                window.localStorage.setItem('login_creds',this.userData[info].email);
                this.router.navigate(['list-restaurant']);
            } else {
                console.log("Failed");
                //   alert("Enter Valid Credentials !!!");
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Incorrect Username or Password !!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }

    onClick() {
        if (this.password === this.loginForm.controls.passwords) {
          this.password = 'text';
          this.show = true;
        } else {
          this.password = this.loginForm.controls.passwords;
          this.show = false;
        }
      }
}