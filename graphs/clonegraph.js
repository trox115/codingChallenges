var cloneGraph = function(node) {
    let queue = [node]
    let hashMap = {}
    let i= 0
    while (queue.length >0){
      
        let currentNode = queue.shift()
        if(currentNode.val in hashMap == false){
            hashMap[currentNode.val] = new Node(currentNode.val,[])
        }
        
       currentNode.neighbors.forEach(function(nodeNeig){ 
           hashMap[nodeNeig.val]=new Node(nodeNeig.val,[])  
            
           hashMap[currentNode.val].neighbors.push(hashMap[nodeNeig.val])
           
           if (nodeNeig.val in hashMap ==false){
           queue.push(nodeNeig)
               }
            });
            
        
        
    }
    console.log(hashMap)
    return hashMap[node.val]
};
