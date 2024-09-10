var username = "Rahul"; // Global variable

function display() {
    console.log(username);
    var mobile = "iPhone"; // Local Variable
    address = "Mumbai"; // Global variable inside function
    console.log("Programming with Harsh");
}

display();
console.log(address); // ReferenceError: address is not defined