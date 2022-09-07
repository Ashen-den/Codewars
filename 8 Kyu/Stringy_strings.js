function stringy(size) {
  let binary = ''
  for (let i = 0; i<size; i++)
    if (i%2===0){
      binary += 1
    } else {
      binary += 0
    }
 return binary
}