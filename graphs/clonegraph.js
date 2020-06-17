/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let queue = [node]
    let alreadyVisited = []
    let hashMap = {}
    console.log(node)
    if (node == null) return null;
    while (queue.length > 0){
        
       let currentNode=queue.shift();
        if(currentNode.val in hashMap == false){
                        
            
          hashMap[currentNode.val] = new Node(currentNode.val,[])
        }
        currentNode.neighbors.forEach(nodebor => {

           if(nodebor.val in hashMap == false){
               hashMap[nodebor.val] = new Node(nodebor.val,[])
           }  
            hashMap[currentNode.val].neighbors.push(hashMap[nodebor.val])
         })
        alreadyVisited.push(currentNode)
        
        currentNode.neighbors.some(node =>{
           if(alreadyVisited.indexOf(node) < 0 && queue.indexOf(node)< 0){
               queue.push(node)
           } 
        } )
        
    }
    return hashMap[node.val]    
};
