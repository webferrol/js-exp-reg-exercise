export function appendElementError (element, message) {
  const messageEL = document.createElement('strong')
  messageEL.setAttribute('class', 'error')
  messageEL.innerHTML = message
  element.parentElement.append(messageEL)
}
