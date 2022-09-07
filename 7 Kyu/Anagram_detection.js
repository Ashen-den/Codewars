const isAnagram = function(test, original) {
  let sortTest = test.split('').map(e=>e.toLowerCase()).sort().join('')
  let sortOriginal = original.split('').map(e=>e.toLowerCase()).sort().join('')  
  return sortTest === sortOriginal ? true : false
};