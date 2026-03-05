/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let st = new Set();
    let l =0;
    let r =0; 
    let mx = 0;
    while(l <s.length ){
        if(!st.has(s[l])){
            st.add(s[l])
            mx = Math.max(mx ,l-r+1)
            l++;
        }else{
            st.delete(s[r]);
            r++;
        }
    }
    return mx;
};




