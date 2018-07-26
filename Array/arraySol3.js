
function myFunc(arr, n){
  var a = [];
  if(n === undefined)
    return arr[0];
  var l = arr.length;
  if(l < n)
    return arr;
  if(n <= 0)
    return a;
  for(var i = 0;i < n;i++){
    a[i] = arr[i];
  }
  return a;
}

console.log(myFunc([7, 9, 0, -2])); 
console.log(myFunc([],3));
console.log(myFunc([7, 9, 0, -2],3));
console.log(myFunc([7, 9, 0, -2],6));
console.log(myFunc([7, 9, 0, -2],-3));
