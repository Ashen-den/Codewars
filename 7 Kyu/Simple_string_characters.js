function solve(s){
  let final = [0,0,0,0]
  let i = 0
  while (i<s.length){
     if(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57){
     final[2]++
     }else if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
     final[1]++
     }else if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
     final[0]++
     }else {
     final[3]++
     }  
   i++
  }  
 return final
}