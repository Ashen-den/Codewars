function chain(input, fs) {
  let chain = fs[0](input)
    for(let i = 1;i<fs.length;i++){
      chain = fs[i](chain)
    }
  
  return chain
}