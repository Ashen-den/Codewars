function modifyMultiply (str,loc,num) {
  return `${str.split(' ')[loc]}${('-'+str.split(' ')[loc]).repeat(num-1)}`
} 