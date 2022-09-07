function order(words){
  return splitWord = words.split(' ').sort((a,b)=>a.match(/(\d+)/g)-b.match(/(\d+)/g)).join(' ')
}