function solve(arr){  
  return arr.map(e=>{
             let count = 0
             for(let i=0; i<e.length; i++){
                e.toLowerCase().charCodeAt(i)-97 === i ? count++ : e
             }
             return count
  })
}