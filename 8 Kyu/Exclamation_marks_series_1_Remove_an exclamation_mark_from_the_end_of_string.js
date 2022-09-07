function remove (string) {
  return string.slice(-1) === '!' ? string.trim().slice(0,-1) : string
}