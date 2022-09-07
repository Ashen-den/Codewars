function solution(str, ending){
  if (ending === '')  {
    return true
    } else if (ending === str.slice(-1*ending.length)){
      return true
    } else {
      return false
    }
}