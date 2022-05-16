//Use conditional check for all letters in array.

function bingo(a) {
  if(a.indexOf(2) > -1 && a.indexOf(9) > -1 && a.indexOf(14) > -1 && a.indexOf(7) > -1 && a.indexOf(15) > -1){
    return "WIN"
  } else {
    return "LOSE"
  }
  
}