/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for(let i =0; i<nums.length ; i++){
        let curr = nums[i];
        let res = target - curr;
        if(obj[res] !== undefined){
            return [obj[res] , i]
        }

        obj[curr] = i; 
    }
};


// *****************************************
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     // freq array 
//     let freq = [];
//     for(let i = 0 ; i < nums.length ; i++)
//          freq[nums[i]] = (freq[nums[i]] || 0 ) + 1; 

//     for(let i =0; i < freq.length ; i++){
//         if(freq[i] > 1 ){
//             return true
//         }
//     }
//     return false;
// };

//! it may contain (-) => we can use set  

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let st = new Set();
    for(let i =0 ; i<nums.length ; i++){
        if(st.has(nums[i])){
            return true;
        }
        st.add(nums[i])
    }
    return false ;

};


// ***************************************************

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

     let freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let d1 = s.charCodeAt(i) - 'a'.charCodeAt(0);
        let d2 = t.charCodeAt(i) - 'a'.charCodeAt(0);

        freq[d1]++;  
        freq[d2]--;  
    }

    for (let i = 0; i < 26; i++) {
        if (freq[i] !== 0) {
            return false
        }
    }
    return true;
};
// **********************************************************
//! Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let obj = {};
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let sort = word.split("").sort().join('') || [];
        if (obj[sort] === undefined) {
            obj[sort] = [];
        }


        obj[sort].push(word)
    }
    return Object.values(obj)
};
