/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findPivot(array,middle){
    
     if(array[middle]>array[middle+1]){
        return middle;
        }
    
         else if(array[middle]<array[middle-1] ){
             return findPivot(array,middle-1)
        }
         else if(array[middle]>array[middle+1]){
             return findPivot(array,middle+1)
         }
        return -1
     }
       
function binarySearch(array,target,start,end){
    
    let middle = Math.abs(Math.floor((start+end) /2))
    console.log([array,target,start,end,middle])
    if(array[middle] ==target){
        return middle
    }
    
     if(start>end){
         return -1
     }
    
    else if(array[middle+1] > target){
        return binarySearch(array,target,start,middle-1)
    }
    else if(array[middle+1]<=target && array[middle-1]<=target){
        return binarySearch(array,target,middle+1,end)
    }
    
}
     
     var search = function(nums, target) {
     let middle = Math.floor(nums.length/2)
     if(middle < 1 && target != nums[middle]){
         return -1
     }
     
     let pivot = findPivot(nums,middle)
   console.log(pivot)
         if(pivot === -1){
             return binarySearch(nums,target,0,nums.length-1)
         }
         
           if(nums[pivot]=== target){
         return pivot
     }
         
         else if(nums[pivot+1] < target && nums[pivot-1]>target){
             return binarySearch(nums,target,0,pivot)
         }
      return binarySearch(nums,target,pivot,nums.length-1)
     };         
