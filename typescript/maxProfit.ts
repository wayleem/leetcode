function maxProfit(prices: number[]): number {
	let buy = 0;
	let profit = 0;

	for (let sell = 0; sell < prices.length; sell++) {
		if (prices[sell] < prices[buy]) buy = sell;
		if (profit < prices[sell] - prices[buy]) {
			profit = prices[sell] - prices[buy];
		}
	}

	return profit;
}
