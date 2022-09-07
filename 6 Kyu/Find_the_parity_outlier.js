function findOutlier(integers){
  return integers.filter(e=>e%2===0).length === 1 
    ? integers.filter(e=>e%2===0)[0] 
    : integers.filter(e=>e%2!=0)[0]
}