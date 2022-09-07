function bestMatch(ALAHLYGoals, zamalekGoals) {
  let goalDiff = []
  let holdIndex = []
  let minIndex = 0
  let findMax = []
  // Build an array of the difference in scores
  for(let i=0;i<zamalekGoals.length;i++){
    goalDiff.push(ALAHLYGoals[i]-zamalekGoals[i])
  }
  // Find the value of the smallest difference in scores
  minIndex = goalDiff.indexOf(Math.min(...goalDiff))
  
  // Create an array that holds all the possible minimum differences 
  for(let i=0;i<zamalekGoals.length;i++){
    if(Math.min(...goalDiff)===(ALAHLYGoals[i]-zamalekGoals[i])){
      holdIndex.push(i)
    }  
  }
  // Return the smallest difference with the highest score
  if(holdIndex.length===1){
    return holdIndex[0]
  } else {
    for(let i=0; i<holdIndex.length;i++){
      findMax.push(zamalekGoals[holdIndex[i]])
    }
    return holdIndex[findMax.indexOf(Math.max(...findMax))]
  }
}