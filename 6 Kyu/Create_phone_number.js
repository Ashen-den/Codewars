function createPhoneNumber(numbers){
  let arrNumbers = numbers.filter(e=>typeof e === "number")
  arrNumbers.splice(6,0,'-')
  arrNumbers.splice(3,0,') ')
  arrNumbers.splice(0,0,'(')
  return arrNumbers.join('')
}