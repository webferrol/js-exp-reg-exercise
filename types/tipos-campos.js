export default {
  campo: {
    expReg: /^\s*$/,
    error: 'La cadena no puede estar vacía'
  },
  'numero-positivo': {
    expReg: /^\+?\d+$/,
    error: 'El número tiene que ser positivo'
  },
  nif: {
    expReg: /^\d{8}-?[a-zA-Z]$/,
    error: 'NIF no válido'
  },
  cp: {
    expReg: /^[0-5]\d{4}$/,
    error: 'Código postal no válido'
  },
  login: {
    expReg: /^[\w]+$/i,
    error: 'Login no válido'
  },
  fecha: {
    expReg: /^([0-3][0-9]\/[0-1][0-9]\/\d{4})|([0-3][0-9]-[0-1][0-9]-\d{4})$/,
    error: 'Fecha no válida'
  }
}
