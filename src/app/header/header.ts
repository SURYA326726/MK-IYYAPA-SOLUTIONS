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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMenuOpen = false; // Close menu on selection
    }
  }

  showLoginModal = false;

  toggleLoginModal() {
    this.showLoginModal = !this.showLoginModal;
    if (this.showLoginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  onLogin() {
    this.toggleLoginModal();
  }
}
