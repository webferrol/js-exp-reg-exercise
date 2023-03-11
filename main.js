import Confetti from './node_modules/js-confetti/dist/es/index.js'
import { appendElementError } from './helpers/append-element-error.js'
import { clearElements } from './helpers/clear-elements.js'
import { validate } from './helpers/validate.js'

let isValidate = true

const formValidate = (key, textValue) => {
  const fields = {
    nif: validate({ expReg: /^[0-9]{8}-?[a-z]$/i, textValue }),
    login: validate({ expReg: /^[a-z]+$/i, textValue }),
    campo: !validate({ expReg: /^\s*$/g, textValue }),
    cp: validate({ expReg: /^\d{5}$/g, textValue }),
    fecha: validate({ expReg: /^[0-3][0-9](-|\/)[0-1][0-9](-|\/)[0-9]{4}$/g, textValue }),
    'numero-positivo': validate({ expReg: /^[+]?[0-9]+$/g, textValue })
  }
  if (fields[key] === false) {
    isValidate = false
    appendElementError(document.querySelector(`[name="${key}"]`), `Campo ${key} no válido`)
  }
}

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()
  const formData = new FormData(document.querySelector('form'))
  isValidate = true
  clearElements('.error')
  // Display the key/value pairs
  for (const pair of formData.entries()) {
    // console.log(`${pair[0]}, ${pair[1]}`)
    formValidate(pair[0], pair[1])
  }
  if (isValidate) {
    const confetti = new Confetti()
    confetti.addConfetti()
  }
})
