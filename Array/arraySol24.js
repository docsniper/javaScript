/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var a1 = [null, 0,'' , false, undefined];

function fun(arr){
  var a = [], j = 0;
  for(var i = 0;i < arr.length;i++){
    if((a1.indexOf(arr[i]) == -1) && !isNaN(arr[i])){
      a[j] = arr[i];
      j++;
    }
  }
  return a;
}

console.log(fun([NaN, 0, 15, false, -22, '',undefined, 47, null]));