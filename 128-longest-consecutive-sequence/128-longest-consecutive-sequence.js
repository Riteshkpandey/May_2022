/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length<2) return nums.length;
    var nums_set=new Set(nums);
    var res=0;
    for(let num of nums)
        {
            if(nums_set.has(num-1)) continue;
            let len=1;
            while(nums_set.has(len+num))
                len+=1;
            res=Math.max(res,len);
        }
    return res;
};