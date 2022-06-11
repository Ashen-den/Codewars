function spinWords(string){
  return string.split(' ').map(e=>e.length >= 5 ? [...e].reverse().join('') : e).join(' ')
}