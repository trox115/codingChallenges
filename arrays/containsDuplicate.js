function containsDuplicate(nums) {
    let hash= {}
    for(let i =0;i<nums.length;i+=1){
        if(nums[i] in hash){
            return true
        }
        else{
            hash[nums[i]] = true
        }
    }
    return false
}

console.log(containsDuplicate([1,2,3,4,2])) //true
console.log(containsDuplicate([1,2,3,4])) //false
