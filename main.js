'use strict'

document.querySelector('form')
  .addEventListener('submit', (e) => {
    e.preventDefault()
  })

document.querySelector('#b1').addEventListener('click', () => {
  const expReg = /^\s*$/
  const input = document.querySelector('[name="campo"]')
  if (expReg.test(input.value)) console.log('El campo nombre no puede estar vacío')
})

document.querySelector('#b2').addEventListener('click', () => {
  const expReg = /^\+?\d+$/
  const input = document.querySelector('[name="numero-positivo"]')
  if (!expReg.test(input.value)) console.log('Sólo se admiten números positivos')
})

document.querySelector('#b3').addEventListener('click', () => {
  const expReg = /^\d{8}-?[a-zA-Z]$/
  const input = document.querySelector('[name="nif"]')
  if (!expReg.test(input.value)) console.log('NIF NO VÁLIDO')
})

document.querySelector('#b4').addEventListener('click', () => {
  const expReg = /^[0-5]\d{4}$/
  const input = document.querySelector('[name="cp"]')
  if (!expReg.test(input.value)) console.log('CP NO VÁLIDO')
})

document.querySelector('#b5').addEventListener('click', () => {
  const expReg = /^[\w]+$/i
  const input = document.querySelector('[name="login"]')
  if (!expReg.test(input.value)) console.log('LOGIN NO VÁLIDO')
})

document.querySelector('#b6').addEventListener('click', () => {
  const expReg = /^([0-3][0-9]\/[0-1][0-9]\/\d{4})|([0-3][0-9]-[0-1][0-9]-\d{4})$/
  const input = document.querySelector('[name="fecha"]')
  if (!expReg.test(input.value)) console.log('Fecha NO VÁLIDO')
})
