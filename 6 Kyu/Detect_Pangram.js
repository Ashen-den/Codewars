function isPangram(string){
  let stringArray = string.toLowerCase()
  let stringTest = []

  for(let i = 0; i<stringArray.length;i++){
    if (stringArray.charCodeAt(i)-96 > 0 && stringArray.charCodeAt(i)-96 < 25) {
    stringTest.push(stringArray.charCodeAt(i)-96)
    }
  }
  let stringFinal= stringTest.sort((a,b)=>a-b)
  let stringRemoveDupe = [...new Set(stringFinal)]
  
  for(let i=0; i<stringRemoveDupe.length; i++){
    if(stringRemoveDupe.length<24) {
      return false
    } 
  }
  return true
}