var friends = ["Shivam", "Chitta Ranjan", "Shreya", "Yogita", "Anubhav", "Rahul", "Lalita", "Suchitra", "Sangeetha"];

// for loop 
for (let index = 0; index < friends.length; index++) {
    if (friends[index] === "Shreya") {
        break;
    }
    console.log(friends[index]);
}

// for loop 
for (let index = 0; index < friends.length; index++) {
    if (friends[index] === "Yogita") {
        continue;
    }
    console.log(friends[index]);
}