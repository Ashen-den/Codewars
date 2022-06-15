function findShort(s){
  return s.split(' ').map(e=>e.length).sort((a,b)=>a-b)[0]
}