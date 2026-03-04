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





/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l =0;
    let r = height.length-1;
    let mx =0 ;
    while(l < r){
        let diff = r - l; // 8 7 6
        let h = Math.min(height[l] , height[r]) //1 7 3
        let area = h * diff; //8 49 18 
        if(area > mx){
            mx = area ;// 8 49
        }
        if(height[r] > height[l] ){
            l++;
        }else{
            r--;
        }
    }
    return mx;
};