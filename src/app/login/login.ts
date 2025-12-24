import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() isModal: boolean = false;
  @Output() close = new EventEmitter<void>();

  switchScreen(s: string) {
    this.screen = s;
  }

  async onLogin() {
    if (this.login.username && this.login.password) {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.login.username, // Mapping username input to email
            password: this.login.password
          })
        });

        const data = await response.json();

        if (response.ok) {
          this.screen = 'otp';
        } else {
          alert(data.message || 'Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login');
      }
    } else {
      alert("Please enter credentials");
    }
  }

  sendOtp() {
    alert('OTP Sent!');
    this.screen = 'otp';
  }

  verifyOtp() {
    if (this.isModal) {
      this.close.emit();
    } else {
       // Navigate home after verification
      window.location.href = '/'; 
    }
  }

  closeModal() {
    this.close.emit();
  }

  moveNext(event: any, index: number) {
    const input = event.target;
    if (input.value && index < 3) {
      input.nextElementSibling.focus();
    }
  }
}
