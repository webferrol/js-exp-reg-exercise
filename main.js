'use strict'

document.querySelector('form')
  .addEventListener('submit', (e) => {
    e.preventDefault()
  })

function manipularBoton (documentPadre) {
  const input = documentPadre.querySelector('input')
  const name = input.getAttribute('name')

  let expReg

  switch (name) {
    case 'campo':
      expReg = /^\s*$/
      if (expReg.test(input.value)) console.log('El campo nombre no puede estar vacío')
      break
    case 'numero-positivo':
      expReg = /^\+?\d+$/
      if (!expReg.test(input.value)) console.log('Sólo se admiten números positivos')
      break
    case 'nif':
      expReg = /^\d{8}-?[a-zA-Z]$/
      if (!expReg.test(input.value)) console.log('NIF NO VÁLIDO')
      break
    case 'cp':
      expReg = /^[0-5]\d{4}$/
      if (!expReg.test(input.value)) console.log('cp NO VÁLIDO')
      break
    case 'login':
      expReg = /^[\w]+$/i
      if (!expReg.test(input.value)) console.log('login NO VÁLIDO')
      break
    case 'fecha':
      expReg = /^([0-3][0-9]\/[0-1][0-9]\/\d{4})|([0-3][0-9]-[0-1][0-9]-\d{4})$/
      if (!expReg.test(input.value)) console.log('fecha NO VÁLIDO')
      break
    default:
      console.log('No existe ese campo')
      break
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
