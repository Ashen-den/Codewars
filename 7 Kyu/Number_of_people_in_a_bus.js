var number = function(busStops){
  return busStops.reduce((acc,b)=>acc+b[0]-b[1],0)
}