//not the cleanest implementation. Using else if is probably more readable.

function findSum(...num){
  if (num == []) {
    return 0
  };
  if (num.find(e => e<0)) {
    return -1
  };
  return num.reduce((acc,b) => acc+b, 0);
}