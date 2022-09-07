function tailAndHead(arr){
  //Create a new array be summing the last digit of the index[0] with the first digit of the next.
//   Continue pattern until the last digit.

  // map out the first value of each element and exclude first element
  let arrFirst = []
  arrFirst = arr.map( e => e.toString()[0])
  arrFirst.shift()
  
  // map out the last value of each element and exclude last element
  let arrLast = []
  arrLast = arr.map( e => e.toString().slice(-1))
  arrLast.pop()
  
//   convert to numbers & add the arrays
  let arrAdd = []
  arrFirst = arrFirst.map( e => parseInt(e,10))
  arrLast = arrLast.map( e => parseInt(e,10))
    for (let i = 0;i<arrFirst.length;i++) {
      console.log(arrAdd.push(arrFirst[i] + arrLast[i]))
    }
  
// sum by multiplying all
  let arrFinal 
  arrFinal = arrAdd.reduce((acc, val) => acc * val, 1)
  
  return (arrFinal)
  
}