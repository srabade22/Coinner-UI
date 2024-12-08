import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isEmailLogin: boolean = false;
  isPasswordVisible: boolean = false;

  onEmailLogin(){
    this.isEmailLogin = !this.isEmailLogin;
  }

  onViewPassword(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
