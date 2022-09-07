var replaceDots = function(str) {
  return str.split('').map(e=>e==='.' ? e='-' : e=e).join('');
}