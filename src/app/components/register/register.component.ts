import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm!: FormGroup;

    constructor(
        private commonService: CommonService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.prepareForm();
    }

    prepareForm() {
        this.registerForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
        })
    }

    onSubmit() {

        this.commonService.getLoginCredentials(this.registerForm.getRawValue()).subscribe(el => {
            console.log("🚀 ~ file: login.component.ts ~ line 31 ~ LoginComponent ~ this.commonService.getLoginCredentials ~ el", el);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Data has been saved successfully !!',
                showConfirmButton: false,
                timer: 1500
              })
        });

        setTimeout(() =>{
            this.registerForm.reset();
            this.router.navigate(['login']);
        },1500)
    }

}
