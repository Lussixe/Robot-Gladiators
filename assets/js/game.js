var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ['Roborto', 'Amy Android', 'Anti-Spiral'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function
var fight = function(enemyName) {
    // Alerts players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

//ask player if they'd like to fight or run
var promptFight = window.prompt("Would you like to to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player choses to fight, fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0 ) {
    window.alert(enemyName + " has died! ");
}else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
  );

// check player's health
if (playerHealth <=0 ) {
    window.alert(playerName + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
// if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to SKIP
 var confirmSkip = window.confirm("Are you sure you'd like to quit?");

 // if yes (true), leave fight
 if (confirmSkip) {
  window.alert(playerName + " has decided to skip this fight. Goodbye!");
  // subtract money from playerMoney for skippiing
  playerMoney = playerMoney - 2;
 }
 // if no (false), ask question again by running fight() again
 else {
     fight();
 }
 // if player did not chose 1 of 2 in prompt
} else {
    window.alert("You need to pick a valid option. Try again!");
}
};

for (var i = 0; i<enemyNames.length; i++) {
    fight(enemyNames[i]);
}
//run fight funtion to start gameg
//fight();