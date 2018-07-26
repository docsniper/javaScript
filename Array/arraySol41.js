/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var a=[];
var i;
function arr(r1,r2)
{
  var temp=r1;
  for(i=0;i<(r2-r1);i++)
    {
      a[i]=temp;
      temp++;
    }
  console.log(a);
}

arr(2,7);
arr(3,6);
arr(-4,6)