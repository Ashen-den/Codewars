// Took me 2 hrs =(, a lot of the solutions involved splits, using length to calculate array size,
// then using repeats to render back to dots

function dotCalculator (equation) {
  let size 
  let val 
  let dot = '.'
  
  if (equation.indexOf('+') != -1) {
   return (equation.split(' + ').join('')) 
  } else if (equation.indexOf('-') != -1) {
     val = equation.split(' - ')
     size = val[0].slice(val[1].length)
     return size
  } else if (equation.indexOf('*') != -1) {
     val = equation.split(' * ')
     return dot.repeat(val[0].length*val[1].length)
  } else {
    val = equation.split(' // ')
    return dot.repeat(Math.floor(val[0].length/val[1].length))
  }    
     
}