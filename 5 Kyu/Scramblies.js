function scramble(str1, str2) {

  const countStringOne = {};
  const countStringTwo = {};
  
    for (const character of str1) {
      countStringOne[character] = countStringOne[character] || 0
      countStringOne[character]++
    }
    for (const character of str2) {
      countStringTwo[character] = countStringTwo[character] || 0
      countStringTwo[character]++
    }
  
    for(const key in countStringTwo){
      if(key in countStringOne){
        if(Number(countStringTwo[key])<=Number(countStringOne[key])){
        //Do Nothing
        } else {
          return false
        }
      } else {
        return false
      }
    }
    return true
}