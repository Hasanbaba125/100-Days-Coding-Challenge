/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
 of people you are inviting to dinner.*/
var guestList = ["Ameen", "Furqan", "Kabeer", "Hassan", "Usman"];
//guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}, would you like to dinner with me?`));
var lengthGuests = guestList.length;
console.log("We are Inviting total ".concat(lengthGuests, " guests."));
