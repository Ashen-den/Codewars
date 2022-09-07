//give preloaded variable dict. Turn string into array and use map to load each variable from object. Then join it back into a string

let makeBackronym = function(string){
  return string.toUpperCase().split('').map(e=>dict[e]).join(' ');
};