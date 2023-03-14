export class Dialog {
  #dialog = null

  constructor () {
    this.#dialog = document.createElement('dialog')
    // this.#dialog.setAttribute('open', true)
    this.#dialog.innerHTML = `
    <p id="msg-dialog">Greetings, one and all!</p>
    <button id="close-dialog">Cerrar</button>
    `
    this.#dialog.querySelector('#close-dialog')
      .addEventListener('click', () => {
        this.#dialog.close()
      })
  }

  getDialog () {
    return this.#dialog
  }

  inputText (textValue) {
    this.#dialog.querySelector('#msg-dialog').innerHTML = textValue
  }

  showModal () {
    this.#dialog.showModal()
  }
}
