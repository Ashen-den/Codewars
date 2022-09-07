function getSum( a,b )
{
  let size = 0
  let array = []
  b>a ? size = b-a : size = a-b
  for(let i=0;i<=size;i++){
    if(i==0){
      b>a ? array.push(a) : array.push(b)
      } else{ 
        b>a ? array.push(a+i) : array.push(b+i)
        }
  }
  return array.reduce((a,b)=>a+b,0)
}