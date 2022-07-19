function narcissistic(value) {
  let stringValue = (value+"") 
  let power = stringValue.length
  return stringValue.split('').map(e=>Math.pow(Number(e),power)).reduce((a,b)=>a+b) == value ? true : false
}