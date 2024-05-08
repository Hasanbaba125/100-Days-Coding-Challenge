/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
// Creating a Array
var userNames = ["Habib", "Hassan", "Shahzaib", "Admin", "Kabeer"];
// Remove all values from our Array Now our Array is empty
userNames = [];
// if Statment for checking Lenght of our Array is empty?
if (userNames.length === 0) {
    console.log("Your Array in Empty We need to find some users");
}
else {
    // If Array is not empty Use ForEach Loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
