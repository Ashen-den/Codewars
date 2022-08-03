function calculateYears(principal, interest, tax, desired) {
  let final = principal
  let year = 0
  while(final<desired){
    final += final*interest*(1-tax)
    year++
  }
  return year
}