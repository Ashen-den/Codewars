function alienLanguage(str){
  let splitString = str.split(' ');
  let final = []
   
   for(let i = 0; i< splitString.length; i++){
   final.push(splitString[i].replace(splitString[i],splitString[i].slice(0,splitString[i].length-1).toUpperCase() + splitString[i].slice(-1).toLowerCase()))
   }
   final = final.join(" ")
   return final
 }