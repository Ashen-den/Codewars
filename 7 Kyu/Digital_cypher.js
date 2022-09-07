//tough one...wasn't sure how to best approach this. I feel like I brute forced the solution.

function encode(str,  n){
  let addNum = ''
  let final = []
  const convertToLetter = str.toUpperCase().split('').map((e,i)=> e.charCodeAt(0)-64)
  
  
  for (let i = 0; i<str.length;i++){
      addNum += n.toString()
  }
  addNum = addNum.split('').map(e=>Number(e))
  
  for (let j=0; j<str.length;j++){
    final.push(convertToLetter[j]+addNum[j])
  }
 return final
}