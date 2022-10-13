function dataReverse(data) {
  let item = []
  let answer = []
  for(let i=0;i<(Math.ceil(data.length/8));i++){   
    item[i] = data.slice(i*8,(i+1)*8)
    answer.unshift(...item[i])
  }
  return answer
}