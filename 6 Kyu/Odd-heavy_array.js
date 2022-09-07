function isOddHeavy(n){
  // Separate Array into Odd Array and Even Array, then sort
    let nOdd = n.filter(e=>e%2!=0).sort((a,b)=>b-a)
    let nEven = n.filter(e=>e%2===0).sort((a,b)=>b-a)
  
  // Compare Odd and Even Arrays
      if(nOdd.length===0) {
        return false
      } else if(nEven.length===0){
        return true    
      } else if (nOdd[nOdd.length-1] > nEven[0]){
        return true
      } else {
        return false
      }
  }