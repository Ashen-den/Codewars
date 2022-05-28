function findMultiples(integer, limit) {
  let answer = []
  for(let i=1; integer*i<=limit;i++){
    answer.push(integer*i)
  }
  return answer
}
