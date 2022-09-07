function howMuchILoveYou(nbPetals) {
  let array = [
              'I love you', 
              'a little',
              'a lot',
              'passionately',
              'madly',
              'not at all'
              ]
  
  return array[(nbPetals-1)%6]
}