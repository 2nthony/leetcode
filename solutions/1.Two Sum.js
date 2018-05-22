const twoSum = (nums, target) => {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
}

twoSum([3, 2, 4], 6)
twoSum([3, 3], 6)
