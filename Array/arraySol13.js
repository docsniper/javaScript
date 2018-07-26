
var arr = [];

function add(a, key, val){
  arr[key] = val;
}

function display(a){
  console.log(a);
}

add(arr, 0, "b");
add(arr, 1, "b");
add(arr, 2, 5);

display(arr);
