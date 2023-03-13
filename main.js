'use strict'
import campos from './types/tipos-campos.js'

document.querySelector('form')
  .addEventListener('submit', (e) => {
    e.preventDefault()
  })

function manipularBoton (documentPadre) {
  const input = documentPadre.querySelector('input')
  const name = input.getAttribute('name')
  switch (name) {
    case 'campo':
      if (campos[name]['expReg'].test(input.value)) console.log(campos[name]['error'])
      break
    case 'numero-positivo':
    case 'nif':
    case 'cp':
    case 'login':
    case 'fecha':
      if (!campos[`${name}`]['expReg'].test(input.value)) console.log(campos[name]['error'])
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
