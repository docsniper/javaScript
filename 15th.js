/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var obj={Name:"Mohit",Color:"Grey"};
var pair=[],val=[],key=[];

val=Object.values(obj);
key=Object.keys(obj);
var len=val.length;
var i=0;
for(i=0;i<len;i++)
 {
   pair[i] = [key[i], val[i]];
 }
console.log(pair);