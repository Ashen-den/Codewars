function array(arr){
  const finalArr = arr 
  if(finalArr.split(',').map(e=>e.trim()).length<3){
    return null
  } else {
    return finalArr.split(',').slice(1,-1).join(' ')
  }
  
}