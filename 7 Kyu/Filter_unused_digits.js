function unusedDigits(arr) {
  let argumentArray = []
  for(let i=0;i<arguments.length;i++){
    argumentArray.push(arguments[i])
  }
  let arrString = argumentArray.join('')
  console.log(arrString)
  let answer = ''
  for( let i=0; i<=9; i++){
    arrString.includes(i) ? answer : answer += i
  }
  return answer
}