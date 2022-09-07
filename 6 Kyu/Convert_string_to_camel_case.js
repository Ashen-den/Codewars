function toCamelCase(str){
  let str2 = str
  return str2.split(/[-_\s]/)
    .map((e,i)=>i!=0 ? e[0].toUpperCase()+e.slice(1,e.length).toLowerCase() : e)
    .map((e,i)=>e.charCodeAt(0)<90 && e.charCodeAt(0)>65 && i===0? e[0]+e.slice(1,e.length) : e)
    .join('')
}