var humanYearsCatYearsDogYears = function(humanYears) {
  let catYear = function(humanYears){
    if (humanYears === 1){
      return 15
    } else if (humanYears === 2){
      return 24
    } else {
      return (humanYears-2)*4 + 24
    }
  } 
  let dogYear = function(humanYears){
    if (humanYears === 1){
      return 15
    } else if (humanYears === 2){
      return 24
    } else {
      return (humanYears-2)*5 + 24
    }
  } 
  return [humanYears,catYear(humanYears),dogYear(humanYears)];
}