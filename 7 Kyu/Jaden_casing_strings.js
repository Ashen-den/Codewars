String.prototype.toJadenCase = function () {
  return this
     .toString()
     .split(' ')
     .map( e => `${e[0].toUpperCase()}${e.slice(1,e.length)}`)
     .join(' ')
};