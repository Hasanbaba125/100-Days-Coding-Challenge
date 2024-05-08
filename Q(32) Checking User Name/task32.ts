/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a 
unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the 
current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that 
the person will need to enter a new username. If a username has not been used, print a message saying that the 
username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

//Array of Current Users
let currentUsersName = ["Hassan", "Furqan", "Kabeer", "Ameen", "Faraz"]

//Array of New Users
let newUsersName = ["Hamza", "Umair", "Hassan", "Bilal", "Kabeer"]

//Loop through newUsersNames to check for usersnames availibility
newUsersName.forEach(new_one_user => {
    
    // Making a condition for Username already exist and save in our_condition variable
    let ourCondition = currentUsersName.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    //Print different messages Using if-Else statments
    if(ourCondition){
console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})