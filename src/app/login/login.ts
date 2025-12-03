import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 screen: string = 'login';   // login | forgot-username | forgot-password | otp

  login = {
    username: '',
    password: ''
  };

  recover = {
    email: '',
    username: ''
  };

  otpInputs = ['', '', '', ''];

  switchScreen(s: string) {
    this.screen = s;
  }

  onLogin() {
    alert('Logged In Successfully!');
  }

  sendOtp() {
    alert('OTP Sent!');
    this.screen = 'otp';
  }

  verifyOtp() {
    alert('OTP Verified!');
    this.screen = 'login';
  }

  moveNext(event: any, index: number) {
    const input = event.target;
    if (input.value && index < 3) {
      input.nextElementSibling.focus();
    }
  }
}
