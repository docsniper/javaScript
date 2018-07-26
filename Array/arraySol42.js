/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var a1=[10,20,30,40,50]
var a2=[30,40,50,60,70]
n1=a1.length;
var flag=1;
var k=0;
n2=a2.length;
var a3=[];
var i,j
for(i=0;i<n1;i++)
  {
    for(j=0;j<n2;j++)
      {
        if(a1[i]==a2[j])
          {
            flag=0;
            break;
          }
      }
    if(flag==1)
      {
        a3[k]=a1[i];
        k++;
      }
  }
console.log(a3);
