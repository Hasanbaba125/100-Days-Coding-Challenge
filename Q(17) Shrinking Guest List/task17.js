/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you
have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two
 people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have
an empty list at the end of your program.*/
// Creating a Guest List Array
var guestList = ["Ameen", "Furqan", "Kabeer", "Hassan"];
// making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Nahi Aa Sakta");
// Add or Remove Values From guest List Array
guestList.splice(0, 1, "Usman");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new value at starting index of array
guestList.unshift("Ali");
// Adding a new value at starting index of array
guestList.push("Yousuf");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest of middle index of array
guestList.splice(middleIndex, 0, "Imran");
console.log("Updated List of our Guests");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two Guests to dinner with me");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
console.log("Invitations to the last 2 Guests:");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
