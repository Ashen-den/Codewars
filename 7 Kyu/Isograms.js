function isIsogram(str){
  console.log(str)
  let truth = true
  let buildString = ''
  let stringSplit = str.split('').map(e=>e.toLowerCase())
    for(let i=0;i<stringSplit.length;i++){
      !buildString.includes(stringSplit[i]) ? buildString = buildString + stringSplit[i] : truth = false
      console.log(buildString)
    }
  return truth
}