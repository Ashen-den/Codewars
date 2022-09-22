function validParentheses(parens) {
  const parensArray = parens.split("")
  let testFalse = null
  const testEven = parensArray.reduce((a,b)=>(a[b] = a[b] + 1 || 1,a),{})
  if (testEven["("] !== testEven[")"]){
    return false
  }
  if (parensArray.length===0){
    return true
  }
  if (parensArray[0] === "(" && (parensArray.length>1 && parensArray.length%2===0)){
    for(let i=0;i<parensArray.length;i++){
      parensArray[i] === "("  
          ? parensArray.splice(parensArray.indexOf(")"),1)
          : testFalse = false
    }
    return testFalse === false 
      ? false 
      : parensArray.includes(')') 
        ? false 
        : true
  }
  return false
}