function isValidWalk(walk) {
  const walkFrequency = walk.reduce((acc,b)=> (acc[b] = acc[b]+1 || 1,acc), {})
  return (walk.length%2 !== 0 || walk.length<10 || walk.length>10)
    ? false 
    : (walkFrequency['n'] === walkFrequency['s']) && (walkFrequency['w'] === walkFrequency['e'])
      ? true
      : false
}