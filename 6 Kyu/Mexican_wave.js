function wave(str){
  let answer = []
  for(let i=0; i<str.length; i++){
    if(str[i] === ' '){
      void(0)
    } else if(i===0){
      answer.push(str[0].toUpperCase() + str.slice(1))
    } else if(i>0){
      answer.push(str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1))
    }
  }
  return answer
}