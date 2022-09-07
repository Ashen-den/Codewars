var uniqueInOrder=function(iterable){
  let array = [] 
  
  if(typeof iterable === "string"){
    array = iterable.split('')
  } else {
    array = iterable
  }
  
  return array.filter((e,i,a)=>a[i]!=a[i+1])
  
}