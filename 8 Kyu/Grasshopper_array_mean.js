var findAverage = function (nums) {
  return (nums.reduce((sum,item) => sum + item)) / nums.length
}