import { Component } from '@angular/core';
import { ProfileModal } from './profile-modal/profile-modal';

@Component({
  selector: 'app-header',
  imports: [ProfileModal],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  switchTo(elementID:string){
      const element=document.getElementById(elementID);
      element?.scrollIntoView({behavior:'smooth',block:'center'})
  }

  showProfileModal = false;

toggleProfileModal() {
  this.showProfileModal = !this.showProfileModal;
}

}
