function disemvowel(str) {
  return str.split('').filter((e,i)=>!"aeiouAEIOU".includes(e)).join('')
}