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

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let mp = new Map();
    let l = 0, mx = 0, res = 0;

    for (let r = 0; r < s.length; r++) {
        mp.set(s[r], (mp.get(s[r]) || 0) + 1);
        mx = Math.max(mx, mp.get(s[r]));
        while (r - l + 1 - mx > k) {
            mp.set(s[l], mp.get(s[l]) - 1);
            l++;
        }
        res = Math.max(res, r - l + 1)
    }
    return res;
};



