var n = "025468";
var arr = [];
var j = 0;
for(var i = 0;i < n.length;i++){
  if(arr !== undefined && arr.length > 0){
    if(arr[j-1]%2 == 0 && n[i]%2 == 0){
      arr[j] = "-";
      arr[j+1] = n[i];
      j += 2;
    }
    else{
      arr[j] = n[i];
      j++;
    }
  }
  else{
    arr[j] = n[i];
    j++;
  }
}

console.log(arr.join(""));
