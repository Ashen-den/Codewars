var capitals = function (word) {
  return word.split('').map((e,i)=>e.charCodeAt(0) < 95 ? i : e).filter(e=>e>=0)
};