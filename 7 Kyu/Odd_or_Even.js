//no comment

function oddOrEven(n) {
  console.log(n)
  if (n==0){
    return EVEN;
  } else if (n==1){
    return EITHER;
  } else if (n%2!=0){
    return EITHER;
  } else if ((n/2)%2==0){
    return EVEN;
  } else {
    return ODD;
  }
}