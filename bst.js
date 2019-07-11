/*
// Factorial (!)

// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

function factorial(num) {
  if(num === 1) {
    // base case 
    return num;
  }
  else {
    // recursive case
    return num * factorial(num-1);
  }
}

factorial(4);
*/

function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  BST.prototype.insert = function(value) {
    if(value <= this.value) {
      // if there is no child node where we would like to insert the new node put it there.
      if(!this.left) this.left = new BST(value);
      // if there is a node there than run this node and run this method .insert() on that node
      else this.left.insert(value);
    }
    else if(value > this.value) {
      if(!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
  };
  
  // var bst = new BST(50);
  
  // bst.insert(30);
  // bst.insert(70);
  // bst.insert(100);
  // bst.insert(60);
  // bst.insert(59);
  // bst.insert(20);
  // bst.insert(45);
  // bst.insert(35);
  // bst.insert(85);
  // bst.insert(105);
  // bst.insert(10);
  
  // console.log(bst.right.right);
  
  
  BST.prototype.contains = function(value) {
    if(value === this.value) return true;
    else if(value < this.value) {
      if(!this.left) return false;
      else return this.left.contains(value);
    }
    else if(value > this.value) {
      if(!this.right) return false;
      else return this.right.contains(value);
    }
  }
  
  BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    if(order === 'pre-order') iteratorFunc(this.value); // 
    if(this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if(order === 'in-order') iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if(order === 'post-order') iteratorFunc(this.value);
     
  };
  
  BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
    var queue = [this]; // This is simply referring to the root node of our binary search tree
     while(queue.length) {
       var treeNode = queue.shift(); // this will take the first node out of our queue and store it in the var tree node
       iteratorFunc(treeNode);
       if(treeNode.left) queue.push(treeNode.left);
       if(treeNode.right) queue.push(treeNode.right);
     }
  };
  
  BST.prototype.getMinVal = function() {
  if(this.left) return this.left.getMinVal();
  else return this.value;
  };
  
  BST.prototype.getMaxVal = function() {
  if(this.right) return this.right.getMaxVal();
  else return this.value;
  };
  
  var bst = new BST(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(100);
  bst.insert(60);
  bst.insert(59);
  bst.insert(20);
  bst.insert(45);
  bst.insert(35);
  bst.insert(85);
  bst.insert(105);
  bst.insert(10);
  
  function log(value) {
    console.log(value);
  }
  
  bst.getMinVal(log);