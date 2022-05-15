//Could have used toString(), but I would have to assign a variable to A+B. the num + '' also appears to run faster
function sumStr(a,b) {
  return Number(a) + Number(b) + '' 
 }