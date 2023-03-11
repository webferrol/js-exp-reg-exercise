export function clearElements (selector) {
  const elements = document.querySelectorAll(selector)
  for (const element of elements) {
    element.parentElement.removeChild(element)
  }
}
