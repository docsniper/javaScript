/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function union(arr1, arr2){
  for(var i = 0;i < arr2.length;i++){
    if(arr1.indexOf(arr2[i]) == -1)
      arr1.push(arr2[i]);
  }
  return arr1.sort(function(a, b){return a-b});;
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));
