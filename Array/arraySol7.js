var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function swap(arr, x, y){
  var t = arr[x];
  arr[x] = arr[y];
  arr[y] = t;
}

function sort(arr){
  var l = arr.length;
  for(var i = 0;i < l - 1;i++){
    for(var j = 0;j < l - i - 1;j++){
      if(arr[j] > arr[j+1])
        swap(arr, j , j + 1);
    }
  }
  return arr;
}

