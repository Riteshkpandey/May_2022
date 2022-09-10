/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
        const sortedArr=[...nums].sort((a,b)=>(a-b));
    console.log(sortedArr);
        let res=[];
        for(let i=0;i<nums.length;i++)
            {
                res.push(sortedArr.indexOf(nums[i]));
            }
    return res;
    
};