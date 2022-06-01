function remove (string) {
  return string.split(' ').filter(e=>e.split('!').length != 2).join(' ')
}