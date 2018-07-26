abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    
};
console.log(abbrev_name("karan k"));

