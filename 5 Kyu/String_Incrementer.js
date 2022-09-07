function incrementString (str) {
    
  let strNumber = str.split('').filter(e=>'0123456789'.includes(e)).join('')
  let answerSize = ((Number(strNumber)+1)+'').length
  let answer = ('0000000'+(Number(strNumber)+1))
  let final =''
  strNumber.length > answerSize 
    ? final = answer.slice(-(strNumber.length)) 
    : final = ((Number(strNumber)+1)+'')
      
   return '0123456789'.includes(str.slice(-1)) ? str.replace(strNumber,final) : str.concat('1') 
}