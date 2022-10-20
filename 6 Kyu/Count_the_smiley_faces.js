//return the total number of smiling faces in the array
function countSmileys(arr) {
  let finalCount = arr
    .filter( e => e[0]===':' || e[0]===';' )
    .filter(e=>e[1] === '-' ||e[1] === '~'  ||e[1] === ')'  || e[1] === 'D')
    .filter(e=> e[2]===undefined || e[2]==='D' || e[2]===')')
    .length
  
  return finalCount
  }