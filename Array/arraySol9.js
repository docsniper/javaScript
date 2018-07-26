
var str = 'The Quick Brown Fox';

for(var i = 0;i < str.length;i++){
  var c = str.charCodeAt(i);
  console.log(c);
  if(c >= 65 && c <= 90)
    str = str.replace(String.fromCharCode(c), String.fromCharCode(c+32));
  else if(c >= 90 && c <= 122)
    str = str.replace(String.fromCharCode(c), String.fromCharCode(c-32));
}

console.log(str);


Add Comment
