var merge= function(intervals){
  /*
    sort ([1,3],[2,6])
    stack=[[1,3]]
    
    for(i=1;)
    top = stack[stack-length-1]
    
    
    */
    
    let stack =[]
    let top = null
    if(intervals.length <=1){
        return intervals
    }
    intervals = intervals.sort((a,b) => a[0]-b[0])
    console.log(intervals)
    stack.push(intervals[0])
    
    for(let i=1; i<intervals.length;i+=1){
        
        top = stack[stack.length -1]
        
        if(top[1]<intervals[i][0]){
            stack.push(intervals[i])
        }
        else if(top[1] < intervals[i][1]){
            top[1] = intervals[i][1]
            stack.pop();
            stack.push(top)
        }

    }
    return stack;
}
