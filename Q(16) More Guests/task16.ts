/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that 
you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/



// Creating a Guest List Array
let guestList = ["Ameen", "Furqan", "Kabeer", "Hassan"];
// making variable for those guest who cant come
let dontCome = guestList[0];
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
 let middleIndex: number = Math.floor(guestList.length / 2);
// Adding a new guest of middle index of array
 guestList.splice(middleIndex, 0, "Imran");

 console.log("Updated List of our Guests");

 guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

