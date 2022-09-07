function solution(str){
  let answer = [] 
  for (let i=0;i<str.length;i++){
      i%2===0
        ? answer.push(str.slice(i,i+2))
        : false;
  }  
  return answer.map(e=>e.length===1 ? e.concat('_') : e)
}