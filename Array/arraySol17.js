
var arr = [1, 2, 3, 4, 5, 7, 8, 9];
var d = new Date();

for(var i = 0;i < arr.length;i++){
  var j = Math.floor(d.getSeconds())%(i+1);
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(arr);
