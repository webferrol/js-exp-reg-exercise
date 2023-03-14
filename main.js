'use strict'
import { Dialog } from './Dialog.js'
import opciones from './types/tipos-campos.js'

let modal = null

function mostrarErrores (errorValue) {
  if (modal === null) {
    modal = new Dialog()
    document.body.prepend(modal.getDialog())
  }

  modal.inputText(errorValue)
  modal.showModal()
}

function validacion (campo, inputValue) {
  return opciones[campo](inputValue)
}

function manipularBoton (documentPadre) {
  const input = documentPadre.querySelector('input')
  const name = input.getAttribute('name')
  const error = validacion(name, input.value)
  if (error) mostrarErrores(error)
}

// Eventos

document.querySelector('form')
  .addEventListener('submit', (e) => {
    e.preventDefault()
  })

document.querySelector('form')
  .addEventListener('click', (e) => {
    // e.currentTarget --> quien provocó el evento
    const elemento = e.target

    if (elemento.tagName === 'BUTTON') {
      manipularBoton(elemento.parentElement)
    }
  })
