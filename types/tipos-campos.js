function noEsValidoCampo (textValue) {
  return /^\s*$/.test(textValue) ? 'Campo no válido' : false
}

function noNumeroPositivo (textValue) {
  return !/^\+?\d+$/.test(textValue) ? 'No número positivo' : false
}

function noNif (textValue) {
  return !/^\d{8}-?[a-zA-Z]$/.test(textValue) ? 'No NIF válido' : false
}

function noCp (textValue) {
  return !/^[0-5]\d{4}$/.test(textValue) ? 'NoCP válido' : false
}

function noLogin (textValue) {
  return !/^[\w]+$/i.test(textValue) ? 'No login' : false
}

function noFecha (textValue) {
  return !/^([0-3][0-9]\/[0-1][0-9]\/\d{4})|([0-3][0-9]-[0-1][0-9]-\d{4})$/.test(textValue) ? 'No Fecha' : false
}

export default {
  campo: noEsValidoCampo,
  'numero-positivo': noNumeroPositivo,
  nif: noNif,
  cp: noCp,
  login: noLogin,
  fecha: noFecha
}
