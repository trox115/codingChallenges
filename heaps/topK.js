/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function Maxheap(hashMap){
    /*
     left = i*2
     right= i*2+1
     parent= i/2 -> floor if not mod 0
    */
    let heapArray=[null]
    for(let i in hashMap){
        heapArray.push(i)
      
        if(heapArray.length > 2){
            let index = heapArray.length-1;
            while(hashMap[heapArray[index]]>hashMap[heapArray[Math.floor(index/2)]]){

[heapArray[Math.floor(index/2)],heapArray[index]] = [heapArray[index],heapArray[Math.floor(index/2)]]  
            if(Math.floor(index/2)>1){
                index=Math.floor(index/2)
            }
            }
        }
        
    }
    console.log(heapArray)
    return heapArray
    
}

var topKFrequent = function(nums, k) {
   /*
    hashMap ={
    
    1:3
    2:2
    3:1
    
    }
    
    while k > 0
    
    array.push(hashMap[k])
    k--
    
   */
    
 let hashMap ={}
 let convert=[]
 
 for(let i=0;i<nums.length;i+=1){
     if(nums[i] in hashMap){
         hashMap[nums[i]] = hashMap[nums[i]] +1
     }
     else{
         hashMap[nums[i]] = 1
     }
 }
   
  let heap = Maxheap(hashMap)
  
  let array=[]
 
  while(k>0){
      heap.shift()
    let aux =heap.shift()
    array.push(aux)
    delete hashMap[aux]
    heap=Maxheap(hashMap)
      k-=1
  }

  return array
};
