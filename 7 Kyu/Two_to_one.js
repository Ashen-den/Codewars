function longest(s1, s2) {
  let s3 = s1+s2
  s3 = s3.split('').sort().filter((e,i,a)=>e!=a[i+1]).join('')
  return s3
}