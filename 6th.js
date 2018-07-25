/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/*666666666666666666666666666666666666666666*/

function swap(arr, x, y){
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function myFunct(arr){
  var l = arr.length;
  for(var i = 0;i < l-1;i++){
    for(var j = 0;j < l-i-1;j++){
      if(arr[j] > arr[j+1])
        swap(arr, j, j+1);
    }
  }
  return arr;
}

console.log(myFunct([5, 1, 0, 10, 8, -4]));

