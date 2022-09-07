function arithmetic(a, b, operator){
  return operator.includes("add") ? a+b
  : operator.includes("subtract") ? a-b
  : operator.includes("multiply") ? a*b
  : operator.includes("divide") ? a/b
  : operator
}