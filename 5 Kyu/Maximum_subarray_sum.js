var maxSequence = function(arr){
  let holdArray = []
  if(arr.length==0){
    return 0
  }
  for (let i = 0; i <= arr.length; i++) {
    let a = [];
    for (let j = i; j < arr.length; j++) {
      a.push(arr[j]);
      holdArray.push([...a])
    }
  }
  let maxNumber = [...holdArray].map(e=>e.reduce((a,b)=>a+b,0))
  return  Math.max(...maxNumber) > 0 ? Math.max(...maxNumber) : 0;
}