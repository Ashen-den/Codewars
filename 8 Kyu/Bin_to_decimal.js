function binToDec(bin){
  return bin.split('').reverse().map((e,i)=>Number(e)*Math.pow(2,i)).reduce((a,b)=>a+b)
}