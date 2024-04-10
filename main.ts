
import inquirer from "inquirer";


let random = Math.floor(Math.random()*10+1);

 let answer = await inquirer.prompt([{
    message: "Enter any number betwwen 1-10",
    type: "number",
    name: "userGuessedNumber",
 }]);

  if(answer.userGuessedNumber===random){
       console.log("Congratulations! You have you guessed correct Number.");
  }else{
    console.log("Sorry You have guessed Number.")
  }
