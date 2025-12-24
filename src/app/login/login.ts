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
    name: '',
    mobile: ''
  };

  recover = {
    email: '',
    username: ''
  };

  // otpInputs = ['', '', '', '', '', '']; // Removed OTP

  @Input() isModal: boolean = false;
  @Output() close = new EventEmitter<void>();

  switchScreen(s: string) {
    this.screen = s;
  }

  async onLogin() {
    if (this.login.name && this.login.mobile) {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.login.name,
            mobile: this.login.mobile
          })
        });

        const data = await response.json();

        if (response.ok) {
           // Direct Login Success
           if (this.isModal) {
            // Store session (Client-side 1 minute timer for accuracy)
            const oneMinute = 60 * 1000;
            const expiry = Date.now() + oneMinute;
            
            localStorage.setItem('user_name', this.login.name); 
            localStorage.setItem('session_token', data.user.token);
            localStorage.setItem('session_expiry', expiry.toString());
            
            // Reload to update header
            window.location.reload();
            this.close.emit();
          } else {
             // Navigate home
            const oneMinute = 60 * 1000;
            const expiry = Date.now() + oneMinute;

            localStorage.setItem('user_name', this.login.name);
            localStorage.setItem('session_token', data.user.token);
            localStorage.setItem('session_expiry', expiry.toString());
            window.location.href = '/'; 
          }
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

  // sendOtp() {} // Removed
  // verifyOtp() {} // Removed
  // moveNext() {} // Removed

  closeModal() {
    this.close.emit();
  }

  moveNext(event: any, index: number) {
    const input = event.target;
    if (input.value && index < 5) {
      input.nextElementSibling.focus();
    }
  }
}
