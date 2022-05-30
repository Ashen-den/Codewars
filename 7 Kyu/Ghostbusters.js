function ghostBusters(building) {
  if(building.indexOf(' ')!=-1){
    return building.split(' ').join('')
  } else {
    return "You just wanted my autograph didn't you?"
  }
}