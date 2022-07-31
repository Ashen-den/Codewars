function removeRotten(bagOfFruits){
  return bagOfFruits 
    ? bagOfFruits.map(e=>e.includes('rotten') ? e.toLowerCase().slice(6) : e.toLowerCase())
    : []
}