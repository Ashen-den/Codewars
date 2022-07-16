function duplicateEncode(word){
  let encoded = ""  
  for(let i=0;i<word.length;i++){
    let word2 = word.toLowerCase()
    word2.indexOf(word2[i]) == word2.lastIndexOf(word2[i]) ? encoded+='(' : encoded+=')'
  }
  return encoded
}