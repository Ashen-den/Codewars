function vowelIndices(word){
  vowels = ['a','e','i','o','u','A','E','I','O','U','y','Y']
  vowelIndex = []
  for (let i=0;i<word.length;i++) {
    if (vowels.indexOf(word[i]) != -1) {vowelIndex.push(i+1)}   
  }
  return vowelIndex
}