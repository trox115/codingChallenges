

var threeSum = function(nums) {
  nums = nums.sort((a,b) => a-b)
  let lastEle= nums.length-1
  let solution={}
  for(let lastEle= nums.length-1;lastEle>1;lastEle-=1){
    
      let i=0
      let b=lastEle-1
      while(b>i){
          if(nums[lastEle]+nums[i]+nums[b] > 0){
              b--
              
          }
          else if(nums[lastEle]+nums[i]+nums[b]<0){
              i++
          }
          else{
              solution[`${nums[lastEle]}${nums[b]}${nums[i]}`] = [nums[lastEle],nums[i],nums[b]]
              i++
              b--
          }
      }

  }
  
       return Object.values(solution)
};

