function findUniq(arr) {
  const arrFrequency = arr.reduce((a,b)=> (a[b]=a[b]+1 || 1,a),{})
  return Number(Object.keys(arrFrequency).find(key=>arrFrequency[key]===1))
}