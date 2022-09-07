function sortArray(array) {
  let sortOdd = array.filter(e=>e%2!=0).sort((a,b)=>a-b)
    return array.map(e=>e%2 !== 0 ? sortOdd.shift() : e)
}