function stringMerge(string1, string2, letter){
  return `${string1.slice(0,string1.indexOf(letter))}${string2.slice(string2.indexOf(letter),-1)}${string2[string2.length-1]}`
}