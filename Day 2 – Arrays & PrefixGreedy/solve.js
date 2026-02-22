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

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let ans = new Array(nums.length).fill(1);
    let l = 1; 
    for (let i = 0; i < nums.length; i++) {
        ans[i] = l
        l *= nums[i];
    }
    // [1,1,2,6]

    let r = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= r;
        r *= nums[i];
    }
    //  [24 , 12 , 8,6 ]
    return ans;

};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let mxSum = nums[0];
    let currSum = nums[0];

    for(let i= 1; i<nums.length ; i++){
        if(currSum < 0 ){
            currSum = nums[i]
        }else{
            currSum += nums[i]
        }

        if(currSum > mxSum){
           mxSum = currSum  
        }
    }
    return mxSum ;
    
};


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    let current = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= current[1]) {
            current[1] = Math.max(current[1], intervals[i][1]);
        } else {
            result.push(current);
            current = intervals[i];
        }
    }


 result.push(current);
    return result;


};











