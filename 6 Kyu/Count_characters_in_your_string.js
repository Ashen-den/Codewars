function count (string) {  
  return string.split('').reduce((acc,b)=>(acc[b] =  acc[b]+1 || 1,acc),{})
}