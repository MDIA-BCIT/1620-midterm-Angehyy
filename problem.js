/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/



function passwordCheck(password, correctPassword){
    //if the password is absolutely correct
    if (password === correctPassword) {
        console.log ("Access Granted!");
    //if password is wrong
     } else if(password !== correctPassword){
        console.log("Access Denied!");
    // if answer typed in is "forgot"
     } else if (password = "forgot"){
        console.log("Here is a hint");
    //if answer typed is "reset"
     } else (password = "reset")
        console.log ("Let's reset your account");
    }
    // correct password
    console.log(passwordCheck (1115, 1115));

    //wrong password
    console.log(passwordCheck(1010, 1115));

    // forgot password
    console.log(passwordCheck ("forgot"));

    //reset password
    console.log(passwordCheck ("reset"));
    
         
         
         