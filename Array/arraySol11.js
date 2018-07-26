
var arr = [1, 2, 3, 4, 5];
var l = arr.length;

function fun(arr, l){
  var sum  = 0;
  for(var i = 0;i < l;i++){
    sum += arr[i]*arr[i];
  }
  return sum
}

console.log(fun(arr, l));
