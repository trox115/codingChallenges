var getSum = function(a, b) {
    /*
    
   111 - 7 
    10 - 2 10 carry -1
  1001 - 9
  
    */
    while(b!=0){
        let carry = a&b
        a = a^b
        b = carry<<1
    }
    return a
};
console.log(getSum(1,2))
console.log(getSum(9,3))
