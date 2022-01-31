function getAverage(marks){
  return Math.floor((marks.reduce((sum, num)  => sum + num) / marks.length))
}