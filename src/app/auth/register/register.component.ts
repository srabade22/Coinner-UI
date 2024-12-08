import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isEmailRegister: boolean = false;
  isPasswordVisible: boolean = false;

  onEmailRegister(){
    this.isEmailRegister = !this.isEmailRegister;
  }

  onViewPassword(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
