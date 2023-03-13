'use strict'

document.querySelector('form')
  .addEventListener('submit', (e) => {
    e.preventDefault()
  })

function manipularBoton (documentPadre) {
  const input = documentPadre.querySelector('input')
  const name = input.getAttribute('name')

  if (name === 'campo') {
    const expReg = /^\s*$/
    if (expReg.test(input.value)) console.log('El campo nombre no puede estar vacío')
  }

  if (name === 'numero-positivo') {
    const expReg = /^\+?\d+$/
    if (!expReg.test(input.value)) console.log('Sólo se admiten números positivos')
  }

  if (name === 'nif') {
    const expReg = /^\d{8}-?[a-zA-Z]$/
    if (!expReg.test(input.value)) console.log('NIF NO VÁLIDO')
  }

  if (name === 'cp') {
    const expReg = /^[0-5]\d{4}$/
    if (!expReg.test(input.value)) console.log('cp NO VÁLIDO')
  }

  if (name === 'login') {
    const expReg = /^[\w]+$/i
    if (!expReg.test(input.value)) console.log('login NO VÁLIDO')
  }

  if (name === 'fecha') {
    const expReg = /^([0-3][0-9]\/[0-1][0-9]\/\d{4})|([0-3][0-9]-[0-1][0-9]-\d{4})$/
    if (!expReg.test(input.value)) console.log('fecha NO VÁLIDO')
  }
}

document.querySelector('form')
  .addEventListener('click', (e) => {
    // e.currentTarget --> quien provocó el evento
    const elemento = e.target

    if (elemento.tagName === 'BUTTON') {
      manipularBoton(elemento.parentElement)
    }
  })
