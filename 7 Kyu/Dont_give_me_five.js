function dontGiveMeFive(start, end){
  array = []
  for(let i = 0;i<=end-start;i++){
    let s = `${(i+start)}`
      if (s.search('5')===-1){
      array.push(s)
      }
    }
  return array.length
}