// Grasshopper - Array Mean

// const Test = require('@codewars/test-compat');

// describe('get average', function () {
//   it('should return the average', function () {
//     Test.assertEquals(findAverage([1]), 1)
//     Test.assertEquals(findAverage([1, 3, 5, 7]), 4)
//   })
// })

var findAverage = function (nums) {
  let j = 0
  nums.map(i => j = j + i)
  return j / nums.length
}