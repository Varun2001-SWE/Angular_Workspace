import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService} from "../../auth.service";

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  errorMessage :string = '';
  submitMessage = 'Form To Be Validated';

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submitForm() {
    console.log(this.loginForm.valid);

    this.loginForm.valid ? this.submitMessage = "Form Valid" : this.submitMessage = "Form Invalid";
  }

  constructor(private router: Router, private authService: AuthService) {}

  signIn() {
    this.router.navigate(['/workbench']);
    const email = this.loginForm.get('email')?.value || '';
    const password = this.loginForm.get('password')?.value || '';

    console.log("checking if the email is working", email);

    if(this.authService.authenticate(email, password)) {
      this.authService.setEmail(email);

    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }


}


