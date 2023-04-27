function factorial(n){
  let answer = n
  if(n===0){
    return 1
  } else{
    for(let i=1;i<n;i++){
      answer *= n-i
    }
    return answer
  }
}