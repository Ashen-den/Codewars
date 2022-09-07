function longest(words) {
  return words.map(e => e.length).reduce((a,b)=> Math.max(a,b))
}