/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function longest_common_starting_substring(s, str){
  if(str.length > s.length){
    if(str.indexOf(s) != -1)
      return s;
  }
  else{
    if(s.indexOf(str) != -1)
      return str;
  }
}

console.log(longest_common_starting_substring('go', 'google'));
console.log(longest_common_starting_substring('SQL', 'SQLInjection'));