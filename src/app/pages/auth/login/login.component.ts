import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidaFormService } from 'src/app/shared/utils/valida-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm = this.fb.group({
    username: ['',[Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
  });



  constructor(private fb:FormBuilder, public validaForm: ValidaFormService, public route:Router) {

  }

  ngOnInit(): void {
      
  }

  onLogin() {
    this.route.navigate(['home']);
  }
  
}
