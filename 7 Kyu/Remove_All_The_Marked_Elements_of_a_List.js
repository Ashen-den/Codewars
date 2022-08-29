Array.prototype.remove_ = function(integer_list, values_list){
  const answer = []
  integer_list.filter(e=>{
    values_list.includes(e) ? e : answer.push(e)
  })
  return answer
}