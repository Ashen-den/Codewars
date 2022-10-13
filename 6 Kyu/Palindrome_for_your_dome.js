function palindrome(string) {
  const cleanString = string
    .split('')
    .map(e=>e.toLowerCase())
    .map(e=>e.charCodeAt(0))
    .filter(e=>e>96 && e<123)
    .map(e=>String.fromCharCode(e))
  const reverseString = [...cleanString].reverse()
  console.log(cleanString,reverseString.join(''))
  return cleanString.join('') === reverseString.join('') ? true : false
}