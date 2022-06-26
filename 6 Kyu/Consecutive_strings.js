function longestConsec(strarr, k) {
  
  let array = strarr.map((e,i,a)=>{
    
    if((a[i+k-1])){ 
      for(let z=1; z<k;z++){
        e+=a[i+z]
      }}
      return e
    })

  return (strarr.length < k || strarr.length === 0 || k <= 0) 
            ? '' 
            : array.filter((e,i,a)=>e.length===Math.max(...a.map(e=>e.length)))[0] 
  
}