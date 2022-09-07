//use a for loop to push values to array.

function countBy(x, n) {
  let z = [];
    for(let i=1; i<=n; i++){
      z.push(x*i);
    }
  return z;
}