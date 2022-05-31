function high(x){
  // define variables
   let total = [] 
   let indexHighWord = 0
   let indexString = x.split(' ')
  // convert each word into array of numbers
   let convert = indexString.map(e=>e.split('')
                                  .map((e,i)=>e.split('')
                                                .map((e,i)=>Number(e.charCodeAt(i))-96)))
  // sum each child array of numbers in parent array
   for(let i=0; i<convert.length;i++){
     total.push(convert[i].map(e=>Number(e)).reduce((a,b)=>a+b,0))
   }
  // find the index of the highest scoring word
    indexHighWord = total.indexOf(Math.max(...total))
    
    return indexString[indexHighWord]
 }