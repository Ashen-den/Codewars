function wordsToMarks(string){
  return string.split('').map(e=>e.charCodeAt()-96).reduce((a,b)=>a+b,0)
}