text_truncate = function(str, len) {
 var ending='...';  
  if (len == null) {
      len = 100;
    }
      
    if (str.length > length) {
      return str.substring(0, len) + ending;
    } 
    else {
      return str;
    }
  };
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))




