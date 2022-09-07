function alphabetPosition(text) {
  return text.split('')
            .filter(e=>/[a-zA-Z]/.test(e))
            .map(e=>e.toLowerCase())
            .map(e=>e.charCodeAt()-96)
            .join(' ');
}