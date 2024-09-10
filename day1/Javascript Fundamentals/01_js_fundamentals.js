/*
       Variable
           Variable is a container contains some information
           We can either user var, let or const to define variable
           
           for example 
           var username = "Harsh";

       String 
           Set of characters
           We can either use single or double quotes

           For example 
               var username = "Harsh";
               console.log(username);

       Array
           To store Multiple values in a single variable
           Store value, key start from 0th position
           We use square bracket []
           We cannot use the associtive array

           For exampe 
           var friends = ["Shivam", "Chitta Ranjan", "Shreya", "Yogita"]; 

       Object
           Multiple values, Object mainly contains properties and method
           To store key and value both
           We use {} brackes for this

           For example 
           var family = {
               father: "a", 
               mother: "b"
           }

       Function
           To reuse the code again and again

           For example
           function add(x, y) {
               console.log(x + y);
           }

       */
var username = "Shivam"; // set of character is called string
console.log(username); // debugging purpose

var friends = ["Shivam", "Chitta Ranjan", "Shreya", "Yogita", "Anubhav", "Osama", "Rahul", "Lalita", "Suchitra", "Sangeetha"]; // array, indexing starts from 0
console.log(friends);
console.log(friends.length)
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

var friendsDetail = {
    bestFriend: "Shivam",
    neighborFriend: "Chitta Ranjan",
    officeFriend: "Shreya",
    normalFriend: "Yogita"
};

var family = { // variable
    father: "a", // property
    mother: "b", // property
    sister: "c", // property
    grandFamily: function () { // method
        return "This is Grand Family"
    }
};

console.log(family); // debugging purpose
console.log(family.father);
console.log(family["father"]);
console.log(family.mother);
console.log(family.sister);
console.log(family.grandFamily());

var x = 2;
var y = 4;
console.log(x + y);

var x = 12;
var y = 14;
console.log(x + y);

/*  
    1. function itself 
    2. function name 
    3. function value wrapped in paranthesis
    4. Code to execute inside function
*/

function add(x, y) { // create a function
    console.log(x + y);
}

add(4, 6); // calling a function
add(5, 6); // calling a function