var items = [1, 2, 3, 4, 5, 7, 8, 9];

function binary_Search(arr, val){
  var h = arr.length-1,
      l = 0;
  while(l < h){
    var m = Math.floor((l+h)/2);
    if(arr[m] == val)
      return m;
    else if(arr[m] > val){
      l = 0;
      h = m;
    }
    else if(arr[m] < val){
      l = m;
      h = arr.length-1;
    }
  }
  return -1;
}

console.log(binary_Search(items, 1)); 
console.log(binary_Search(items, 5));
