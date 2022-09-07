function alphanumeric(string){
  if((/[\W_+]/g).test(string)) {
    return false
  } else if ((/\s+/).test(string)) {
    return false
  } else if (string === ''){
    return false
  } else {
    return true
  }

}