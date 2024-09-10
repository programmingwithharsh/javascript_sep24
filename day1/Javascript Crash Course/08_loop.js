var friends = ["Shivam", "Chitta Ranjan", "Shreya", "Yogita", "Anubhav", "Rahul", "Lalita", "Suchitra", "Sangeetha"];

// for loop 
for (let index = 0; index < friends.length; index++) {
    console.log(friends[index]);
}

console.log("---------------------");

// for in loop 
for (var index in friends) {
    console.log(friends[index]);
}

console.log("---------------------");

// for of loop, added in ES6
for (var index of friends) {
    console.log(index);
}
