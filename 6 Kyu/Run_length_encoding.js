//Solution without Regex. Compare each index to each other and add up the times they match in a row, if it doesn't match anymore, push it to a new index.

var runLengthEncoding = function(str){
  let counter = 1
  let result = []
  let test = str.split('')

  for(let i=0; i<test.length; i++){
    if (test[i]===test[i+1]) {
      counter++
    } else {
      result.push([counter,test[i]])
      counter = 1
    }
   }
  return result
}