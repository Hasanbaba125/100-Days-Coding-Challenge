/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized
with the person’s name.*/
var friendsName = ["Hassan", "Furqan", "Kabeer", "Ameen"];
friendsName.forEach(function (friendsName) { return console.log("Hello ".concat(friendsName, ", How are you?")); });
