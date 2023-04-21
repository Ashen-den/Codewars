function capitalize(s){
  const capArray = []
  capArray.push(s.split('').map((e,i)=> i%2===0 ? e.toUpperCase() : e).join(''))
  capArray.push(s.split('').map((e,i)=> i%2!=0 ? e.toUpperCase() : e).join(''))
  return capArray
};