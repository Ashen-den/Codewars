function getCount(str) {
  let vowelsCount = 0;
  str.split('').map(e =>{
    e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u'
    ? vowelsCount++ : '' ;
  })
 
  
  return vowelsCount;
}