//Accidently Used window as variable, then for loop wouldn't take my condition, b/c its not an array...use while

function bouncingBall(h,  bounce,  windows) {
  let totalBounces = 1
  let newHeight = h
  
  if( h<0 || bounce < 0 || bounce >= 1 || windows>=h || windows < 0){
    return -1
  }
  
  while(newHeight>windows){
    totalBounces += 2
    newHeight -= newHeight*(1-bounce)
  }
    return totalBounces-2
  }