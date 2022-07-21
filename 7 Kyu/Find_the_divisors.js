function divisors(integer) {
  let answer = []
    for (let i=2;i<integer;i++){
      integer%i === 0 ? answer.push(i) : i
    }
  return answer.length === 0 ? `${integer} is prime` : answer
};