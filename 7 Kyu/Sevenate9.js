function sevenAte9(str) {
  let answer = str.split('')
  for(let i=0;i<str.length;i++){
    if(answer[i]==='9' && answer[i-1]==='7' && answer[i+1]==='7'){
      answer.splice(i,1)
    }
  }
  return answer.join('')
} 