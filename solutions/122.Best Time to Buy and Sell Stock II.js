const maxProfit = prices => {
  const len = prices.length
  let profit = 0
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (prices[j] > prices[i]) {
        if (prices[j] > prices[j + 1] && prices[j + 1] - prices[i + 1] !== prices[j] - prices[i]) {
          profit += prices[j] - prices[i]
        }
      }
      break
    }
  }
  console.log(profit)
  return profit
}

maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([1, 2, 3, 4, 5])
maxProfit([7, 6, 4, 3, 1])
