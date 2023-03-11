export function validate ({ expReg, textValue }) {
  return expReg.test(textValue)
}
