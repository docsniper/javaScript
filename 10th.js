/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function swap(arr, x, y){
 var temp = arr[x];
 arr[x] = arr[y];
 arr[y] = temp;
}

function myFunction(arr){
 var l = Object.keys(arr).length;
 for(var i = 0;i < l-1;i++){
   for(var j = 0;j < l-i-1;j++){
     if(arr[j].libraryID < arr[j+1].libraryID)
       swap(arr, j, j+1);
   }
 }
 return arr;
}

var library = [
  {
      title:  'The Turn Ahead',
      author: 'MJK',
      libraryID: 1254
  },
  {
      title: 'The Hidden truth',
      author: 'Stefan k',
      libraryID: 4264
  },
  {
      title: 'The Hunger of Games',
      author: 'Max L',
      libraryID: 3245
  }];

console.log(myFunction(library));