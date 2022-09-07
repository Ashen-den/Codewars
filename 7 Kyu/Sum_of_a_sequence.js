const sequenceSum = (begin, end, step) => {
  let answer = begin>end ? 0 : [begin]
  let stepCounter = begin
  while(stepCounter<end){
    stepCounter = stepCounter + step
    stepCounter>end ? stepCounter : answer.push(stepCounter)
  }
  return answer === 0 ? 0 : answer.reduce((a,b)=>a+b,0)
};