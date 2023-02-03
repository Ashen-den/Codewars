function roundToNext5(n){
  if (n===0){
    return 0
  } else {
    return Math.ceil(n/5)*5
  }
}