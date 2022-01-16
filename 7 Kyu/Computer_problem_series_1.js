function save(sizes, hd) {
  let totalSize = 0
  let final = 0
 
 for (let i = 0; totalSize<=hd; i++) {
   totalSize += sizes[i]
   final = i
 }
  return final
 }