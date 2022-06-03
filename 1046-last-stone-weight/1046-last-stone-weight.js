/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length<2) return stones;
    stones=stones.sort((a,b)=>a-b);
    let a1=stones.pop();
    let a2=stones.pop();
    stones.push(Math.abs(a1-a2));
    return lastStoneWeight(stones);
    
};