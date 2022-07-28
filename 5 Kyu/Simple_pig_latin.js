function pigIt(str){
    
  return str.split(' ').map((e,i,a)=>{
                          let addLetter = `${e}${e.slice(0,1)}ay`
                          let finalWord = addLetter.slice(1)
                          return '?!'.includes(e) ? e : finalWord
                          })
                       .join(' ')
                  
    }