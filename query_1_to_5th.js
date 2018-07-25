/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
/*1111111111111111111111111111111111111111111111111*/


var myObject = { 
  name : "Mohit", 
  sclass : "x", 
  age : 23 
};

function myFunction(x){
	for(key in x){
		console.log(key);
	}
}

myFunction(myObject);


/*22222222222222222222222222222222222*/
var student={
   name:"mohit",
   sclass:"x",
   age:23
};
console.log(student);
delete student.age;
console.log(student);
/*33333333333333333333333333333333333333333*/
var myArray= new Object();
myArray['name']='Mohit';
myArray['classe']='Alpha';
myArray['age']=23;
var obj= Object.keys(myArray).length;
console.log(obj);

/*4444444444444444444444444444444444444*/
var bookLibrary = [ 
    {
        title: 'The Turn Ahead',
        author: 'MKJ',
        readingStatus: true
    },
    {
        title: 'Nothing Matters',
        author: 'SPJ',
        readingStatus: true
    },
    {
        title: ' The Hunger of names',
        author: 'Stefan Sil',
        readingStatus: false
    }];

for (var i = 0; i < bookLibrary.length; i++) 
   {
    var book = "'" + bookLibrary[i].title + "'" + ' by ' + bookLibrary[i].author + ".";
      
      if (bookLibrary[i].readingStatus) {
      console.log("Completed reading " + book);
    } else
    {
     console.log("on the way to finish " + book);
    }
   }

/*5555555555555555555555555555555*/
function Cylind(cylHeight, cylDiameter) {
  this.cylHeight = cylHeight;
  this.cylDiameter = cylDiameter;
}

Cylind.prototype.Volume = function () {
  var radius = this.cylDiameter / 2;
  return this.cylHeight * Math.PI * radius * radius;
};

var cyl = new Cylind(7, 4);

console.log('volume =', cyl.Volume().toFixed(4));



