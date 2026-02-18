/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let mn = prices[0];
    let mx = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < mn) {
            mn = prices[i];
        } else {
            let profit = prices[i] - mn
            if (profit > mx) {
                mx = profit;
            }
        }
    }

    return mx;
}
