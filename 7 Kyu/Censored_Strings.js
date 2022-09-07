function uncensor(infected, discovered) {
  const infectedArray = infected.split('')
  const discoveredArray = discovered.split('')
  for(let i=0;i<infectedArray.length;i++){
    infectedArray[i] === '*' ? infectedArray[i] = discoveredArray.shift() : infectedArray[i]    
  }
  return infectedArray.join('')
}