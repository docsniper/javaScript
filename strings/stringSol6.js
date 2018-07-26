var email="kapoorkaran@gmail.com";
splitemail= email.split("@");
part1=splitemail[0];
half=part1.length/2;
part1=part1.substring(0,(part1.length-half))
console.log(part1+"....@"+splitemail[1]);

