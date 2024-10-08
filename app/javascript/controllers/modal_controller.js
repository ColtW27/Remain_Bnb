import { Controller } from '@hotwired/stimulus'
import { enter, leave } from 'el-transition'

export default class extends Controller {
  connect() {
    enter(document.getElementById('authentication-modal'))
    enter(document.getElementById('auth-modal-wrapper'))

    // document.getElementById('authentication-modal').addEventListener('click', this.closeModal)
    document.getElementById('auth-modal-wrapper').addEventListener('click', this.closeModal)
  }

  closeModal(event) {
    const modalPanelClicked = document.getElementById('authentication-modal').contains(event.target);
    console.log(modalPanelClicked)
  
    if (!modalPanelClicked) {
      console.log("leaving")
      leave(document.getElementById('authentication-modal'))
    }
  }
}
