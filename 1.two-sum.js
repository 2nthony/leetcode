const { log } = console

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const res = nums[i] + nums[j]
      if (res === target) {
        return [i, j]
      }
    }
  }
}

// log(twoSum([2, 7, 11, 15], 9))
// log(twoSum([3, 2, 4], 6))