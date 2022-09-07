function sortMyString(S) {
  return `${S.split('').filter((e,i)=>i%2===0).join('')} ${S.split('').filter((e,i)=>i%2!==0).join('')}`
}