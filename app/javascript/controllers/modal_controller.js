import { Controller } from '@hotwired/stimulus'
import { enter, leave } from 'el-transition'

export default class extends Controller {
  connect() {
    document.getElementById('auth-modal-close-button').addEventListener('click', this.closeModal)
    document.getElementById('auth-modal-wrapper').addEventListener('click', this.closeModal)
    document.getElementById('authentication-modal').addEventListener('click', this.showModal)
  }

  closeModal(event) {
    const modalPanelClicked = document.getElementById('authentication-modal').contains(event.target);
    console.log(modalPanelClicked)

    if (!modalPanelClicked || event.target.id === 'auth-modal-close-button') {
      console.log('hit the x')
      leave(document.getElementById('authentication-modal'))
    }
  }

  showModal(event) {
    enter(document.getElementById('authentication-modal'));
  }

}
