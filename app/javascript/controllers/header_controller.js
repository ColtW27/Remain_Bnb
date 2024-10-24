import { Controller } from '@hotwired/stimulus'
import { toggle } from 'el-transition'

export default class extends Controller {
  static targets = [
    'openUserMenu',
    'userAuthLink',
    'profileDropdownLinks'
  ]

  connect() {
    this.openUserMenuTarget.addEventListener('click', this.toggleDropdownMenu.bind(this))

    this.userAuthLinkTargets.forEach((link) => {
      link.addEventListener('click', (e) => {
        document.getElementById('modal-trigger').click();
        this.toggleDropdownMenu()
       
      });
    });
    
    this.profileDropdownLinksTargets.forEach((link) => {
      link.addEventListener('click', (e) => {
        this.toggleDropdownMenu()
       
      });
    });
  }; 

  toggleDropdownMenu() {
    toggle(document.getElementById('menu-dropdown-items'))
  }
}
