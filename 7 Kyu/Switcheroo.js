function switcheroo(x){
  return [...x].map(e=>{ 
    return e==='a' 
    ? 'b' 
    : e==='b'
      ? 'a'
      : e
  }).join('') 
}