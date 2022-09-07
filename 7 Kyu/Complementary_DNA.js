function DNAStrand(dna){
  let complementaryStrand = '' 
  dna.split('').map(e=>{
    if (e==='A'){
      complementaryStrand += 'T'
    } else if (e==='T'){
      complementaryStrand += 'A'
    } else if (e==='C'){
      complementaryStrand += 'G'
    } else {
      complementaryStrand += 'C'
    }
  })
  return complementaryStrand
}