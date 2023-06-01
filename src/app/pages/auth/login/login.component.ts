import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidaFormService } from 'src/app/shared/utils/valida-form.service';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  tokenVisible: boolean = true;
  reCAPTCHAToken: string = "";

  constructor(private fb: FormBuilder, public validaForm: ValidaFormService, public route: Router,
    private recaptchaV3Service: ReCaptchaV3Service) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onLogin() {
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      this.tokenVisible = true;
      this.reCAPTCHAToken = `Token [${token}] generated`;
  });
    //this.route.navigate(['home']);
  }



}
