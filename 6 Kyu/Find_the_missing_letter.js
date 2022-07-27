function findMissingLetter(array)
{
  const missingLetter = array
                          .map(e=>e.toLowerCase().charCodeAt())
                          .filter((e,i,a)=>e-a[i-1]===2)[0]-1
  return array[0].charCodeAt() < 96 
        ? String.fromCharCode(missingLetter).toUpperCase() 
        : String.fromCharCode(missingLetter)
}