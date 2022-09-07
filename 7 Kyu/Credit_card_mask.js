function maskify(cc) {
  if(cc.length > 4){ 
    return `${cc.slice(0,-4).split('').map(e => e='#').join('')}${cc.slice(-4,-1)}${cc.slice(-1)}`
   } else { 
    return cc 
   }
              
}