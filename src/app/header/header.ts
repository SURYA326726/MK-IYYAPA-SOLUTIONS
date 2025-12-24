import { Component } from '@angular/core';
import { ProfileModal } from './profile-modal/profile-modal';
import { Login } from '../login/login';

@Component({
  selector: 'app-header',
  imports: [ProfileModal, Login],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  showProfileModal = false;
  isMenuOpen = false;
  isDarkMode = false;

  toggleProfileModal() {
    this.showProfileModal = !this.showProfileModal;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  switchTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      this.isMenuOpen = false; // Close mobile menu
    }
  }

  showLoginModal = false;
  showSessionExpiredModal = false;
  userName: string | null = null;
  isLoggedIn = false;
  private sessionTimer: any;

  ngOnInit() {
    this.checkSession();
  }

  checkSession() {
    const token = localStorage.getItem('session_token');
    const expiry = localStorage.getItem('session_expiry');
    const name = localStorage.getItem('user_name');

    if (token && expiry && name) {
      const remainingTime = parseInt(expiry, 10) - Date.now();
      if (remainingTime > 0) {
        this.userName = name;
        this.isLoggedIn = true;
        
        // Clear any existing timer
        if (this.sessionTimer) clearTimeout(this.sessionTimer);
        
        // Set timer for expiry
        this.sessionTimer = setTimeout(() => {
          this.handleSessionExpiry();
        }, remainingTime);
      } else {
        this.logout();
      }
    }
  }

  handleSessionExpiry() {
    this.logout(false); // Logout without reload first
    this.showSessionExpiredModal = true;
  }

  closeSessionExpiredModal() {
    this.showSessionExpiredModal = false;
    window.location.reload();
  }

  logout(reload: boolean = true) {
    if (this.sessionTimer) clearTimeout(this.sessionTimer);
    localStorage.removeItem('session_token');
    localStorage.removeItem('session_expiry');
    localStorage.removeItem('user_name');
    this.userName = null;
    this.isLoggedIn = false;
    if (reload) window.location.reload();
  }

  toggleLoginModal() {
    if (!this.isLoggedIn) {
      this.showLoginModal = !this.showLoginModal;
      if (this.showLoginModal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }

  onLogin() {
    this.toggleLoginModal();
  }
}
