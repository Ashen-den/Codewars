function DNAtoRNA(dna) {
  return dna.split('').map(e => e === 'T' ? e = 'U': e).join('')
}
