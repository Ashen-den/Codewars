function choreAssignment(chores) {
  let sortChore = chores.sort((a,b)=>a-b)
  let answer = []
  for(let i=0;i<chores.length/2;i++){
    answer.push(sortChore[i]+sortChore[sortChore.length-1-i])
  }
  return answer.sort((a,b)=>a-b)
}


