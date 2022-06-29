function span(arr, predicate) {
  let array = []
  if(arr.every(e=>predicate(e)===true)){
    array.push(arr)
    array.push([])
  } else {
    array.push(arr.slice(0,arr.indexOf(arr.find((e,i)=>predicate(e)===false))))
    array.push(arr.slice(arr.indexOf(arr.find((e,i)=>predicate(e)===false)),arr.length))
  }
  return array
}