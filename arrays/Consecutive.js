/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxStreak = 0
    let hashMap = {}
    let array=[]
    if(nums===[]){
        return maxStreak
    }
    
    for(let i=0;i<nums.length;i+=1){
        hashMap[nums[i]] = true
    }
   for (let i in hashMap){
       let currentStreak=1
       let j = parseInt(i,10)
       j=j+1
       while(j in hashMap){
           currentStreak+=1;
           j+=1
       }
       maxStreak = Math.max(currentStreak,maxStreak)
   }
    return maxStreak
};
