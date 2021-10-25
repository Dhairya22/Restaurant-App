import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm(){
    this.registerForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    this.registerForm.reset({});
  }

}
