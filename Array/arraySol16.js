function leap(y1, y2){
  for(var i = y1;i <= y2;i++){
    if(i%400 == 0)
      console.log(i+"\n");
    else if(i%100 == 0)
      continue;
    else if(i%4 == 0)
      console.log(i+"\n");
  }
}

leap(1900, 2000);


Add Comment
