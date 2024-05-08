/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate 
array. Call show_magicians() with each array to show that you have one array of the original names and one array with
the Great added to each magician’s name.*/


//Define the function to show magicians names
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of magicians names
let magician_names = ["Harry Poter", "Hassan", "Kabeer"]

//Making a copy of Original array through .slice() function
let copy_magician_names = magician_names.slice();

//Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

//Show both arrays of Original and Copied

//Original
console.log("Original Array\n")
show_magicians(magician_names);

//Copied
console.log("Copied Array\n")
show_magicians(copy_great_magicians);