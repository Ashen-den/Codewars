function accum(s) {
	return s.toLowerCase().split('')
    .map((e,i)=>{
      return e[0].toUpperCase()+e.repeat(i)      
    }).join('-')
}