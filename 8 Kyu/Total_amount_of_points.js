function points(games) {
  return games.map(e=>e.split(':')).reduce((acc,b)=>{
      if(b[0]>b[1]){
        return acc += 3
      } else if(b[0]<b[1]){
        return acc += 0
      } else {
        return acc +=1
      }
  },0)
}