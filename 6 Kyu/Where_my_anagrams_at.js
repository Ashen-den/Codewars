function anagrams(word, words) {
  let answer = []
  let item = words.map(e=>e.split('').sort().join(''))
  for(let i=0;i<words.length;i++){
     if (item[i]===word.split('').sort().join('')){
       answer.push(words[i])
     }
   }
   return answer
}