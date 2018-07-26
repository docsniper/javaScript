/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function contains(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return true;
        }
    }
    return false;
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
console.log(contains(arr,1));
