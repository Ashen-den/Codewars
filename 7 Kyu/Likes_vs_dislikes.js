// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  let answer = ""
  if(buttons.length>0){
    for(let i=0;i<buttons.length;i++){
      answer === buttons[i]
        ? answer = "Nothing"
        : answer = buttons[i]
    }
    return answer 
  }
  return "Nothing"
}