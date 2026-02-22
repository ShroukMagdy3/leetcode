/**
 * @param {string} 
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    s = s.toLowerCase();    
    let c = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            c += char;  
        }
    }
    let reversed = "";
    for (let i = c.length - 1; i >= 0; i--) {
        reversed += c[i];
    }
    
    return c === reversed;

};





/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0 ){
        return 0;
    }
    let j =1;
    for(let i = 1; i<nums.length ; i++){
        if(nums[i] !== nums[i-1]){
            nums[j] =nums[i];
            j++;
        }
    }
    return j;
};