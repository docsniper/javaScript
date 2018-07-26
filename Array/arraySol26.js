/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function sumg(arr, t){
  for(var i = 0;i < arr.length;i++){
    for(var j = i+1;j < arr.length;j++){
      if((arr[i]+arr[j]) == t){
        console.log((i+1)+", "+(j+1));
      }
    }
  }
}

sumg([10,20,10,40,50,60,70], 50);