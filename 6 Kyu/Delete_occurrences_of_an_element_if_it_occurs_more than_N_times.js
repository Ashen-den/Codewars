function deleteNth(arr,n){
  let array = [...arr]
  let countArrayElements = array.reduce((a,b)=>(a[b] = a[b] + 1 || 1,a),{})
  const maxCount = Math.max(...Object.values(countArrayElements))

  for(let i=0;i<maxCount-n;i++){
    for (let key in countArrayElements){
      countArrayElements[key]>n ? array.splice(array.lastIndexOf(Number(key)),1) : key
      countArrayElements = array.reduce((a,b)=>(a[b] = a[b] + 1 || 1,a),{})
    }   
  }
  return array
}