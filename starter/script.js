// // // console.log("Part 2: Functions ready!");

// // // // Functions - Declarations && Expressions

// // // function logger() {
// // //     console.log("My name is Elijah");
// // // }

// // // logger();
// // // logger();
// // // logger();

// // // function fruitProcessor(apples, oranges) {
// // //     console.log(apples, oranges);
// // //     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// // //     return juice;
// // // }

// // // console.log(fruitProcessor(5, 3));

// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);

// // // // Function Expressions
// // // const calcAge = function (birthYear) {
// // //     return 2025 - birthYear;
// // // };

// // // const age1 = calcAge(2005);
// // // console.log(age1);

// // // console.log(calcAge(2005));

// // // function introduce(firstName, lastName, age) {
// // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
// // //     return introduction;
// // // }

// // // console.log(introduce("Elijah", "Cabanero", 20));
// // // //  this will print undefined for missing values
// // // console.log(introduce("Elijah"));

// // // // return values and function scope
// // // function yearsUntilRetirement(birthYear, firstName) {
// // //     const age = calcAge(birthYear);
// // //     const retirement = 65 - age;

// // //     if (retirement > 0) {
// // //         return `${firstName} retires in ${retirement} years`;
// // //     } else {
// // //         return `${firstName} has already retired`;
// // //     }
// // // }

// // // console.log(yearsUntilRetirement(2000, "Elijah"));

// // // /// function scope
// // // const globalVar = "I am global";

// // // function testScope() {
// // //     const localVar = "I am local";
// // //     console.log(globalVar);
// // //     console.log(localVar);
// // // }

// // // testScope();
// // // console.log(globalVar);
// // // // console.log(localVar); // would cause error

// // // function calcAverage(score1, score2, score3) {
// // //     const total = (score1 + score2 + score3) / 3;
// // //     return total;
// // // }

// // // function checkWinner(avgDolphins, avgKoalas) {
// // //     if (avgDolphins >= 2 * avgKoalas) {
// // //         return `Dolphins win ${avgDolphins} vs ${avgKoalas}`;
// // //     } else if (avgKoalas >= 2 * avgDolphins) {
// // //         return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
// // //     } else {
// // //         return `No team wins... Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// // //     }
// // // }

// // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // Elijah Cabanero – Array Basics Demo

// // // const grades = [85, 92, 78, 96, 88];
// // // console.log(grades);
 
// // // ////Array Creation and Access
 
// // // const friends = ["Nad", "Lakay", "Jun"];
// // // console.log(friends);
 
// // // const mixed = ["Jonas", 40, false, friends ];
// // // console.log(mixed);
 
// // // const years = new Array(1991, 1984, 2008, 2020);
// // // console.log(years);
 
// // // /// Accessing Array Elements
 
// // // console.log(friends[0]);
// // // console.log(friends[1]);
// // // console.log(friends[2]);
// // // console.log(friends[4]);
 
// // // /// access the length
// // // console.log(friends.length);
 
// // // //change array
// // // friends[0] = "Jay";
// // // console.log(friends);
 
// // // const calcAge = function(birthYear){
// // //     return 2025 - birthYear;
// // // }
 
// // // const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
// // // console.log(ages);
 
// // // ///Array Methods
// // // // adds at the last
// // // const newLength = friends.push("John");
// // // console.log(friends);
// // // console.log(newLength);
// // // // adds at the first
// // // friends.unshift("Mark");
// // // console.log(friends);
 
// // // //removing elements
// // // //remove from last item
// // // const popped = friends.pop();
// // // console.log(popped);
// // // console.log(friends);
 
// // // //remove from first item
// // // const shifted = friends.shift();
// // // console.log(shifted);
// // // console.log(friends);
 
// // // //finding element
// // // console.log(friends.indexOf("Jay"));
// // // console.log(friends.indexOf("Mark"));
 
// // // //includes
// // // console.log(friends.includes("Peter"));
// // // console.log(friends.includes("Lakay"));
 
// // // //Array iterations
// // // for (let i = 0; i < friends.length; i++) {
// // //     console.log(friends[i]);
// // // }
 
// // // friends.forEach(
// // //     function(friend, index){
// // //         console.log(`${index + 1}: ${friend}`)
// // //     }
// // // );
 
// // // friends.forEach((friend, index) => {
// // //   console.log(`Friend ${index + 1}: ${friend}`);
// // // });
 
// // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // let total = 0;
 
// // // for (let i = 0; i < grades2.length; i++) {
// // //     total += grades2[i];
// // // }
 
// // // const average = total / grades2.length;
// // // console.log(`The Average grade: ${average.toFixed(2)}`);
 
// // // let passedCount = 0;
// // // grades2.forEach((grade) =>{
// // //     if(grade >= 70) passedCount++;
// // // });
 
// // // console.log(`${passedCount} out of ${grades2.length} students have passed`);


// // // ============================
// // // Elijah Cabanero – GRADE REPORT
// // // ============================

// // const grades = [78, 85, 92, 67, 88, 95, 73, 82];
// // let total = 0;

// // // Function to calculate average
// // function calculateAverage(grades) {
// //   for (let i = 0; i < grades.length; i++) {
// //     total += grades[i];
// //   }
// //   return total / grades.length;
// // }

// // // Function to find highest grade
// // function findHighestGrade(grades) {
// //   let highest = 0;
// //   for (let i = 0; i < grades.length; i++) {
// //     if (grades[i] > highest) {
// //       highest = grades[i];
// //     }
// //   }
// //   return highest;
// // }

// // // Function to find lowest grade
// // function findLowestGrade(grades) {
// //   let lowest = grades[0];
// //   for (let i = 0; i < grades.length; i++) {
// //     if (grades[i] < lowest) {
// //       lowest = grades[i];
// //     }
// //   }
// //   return lowest;
// // }

// // // Function to count passing students
// // function countPassing(grades, passingGrade) {
// //   let passedCount = 0;
// //   for (let i = 0; i < grades.length; i++) {
// //     if (grades[i] >= passingGrade) {
// //       passedCount++;
// //     }
// //   }
// //   return passedCount;
// // }

// // // Generate complete report
// // const average = calculateAverage(grades);
// // const highest = findHighestGrade(grades);
// // const lowest = findLowestGrade(grades);
// // const passing = countPassing(grades, 70);

// // console.log("=== GRADE REPORT (by Elijah Cabanero) ===");
// // console.log(`Average: ${average.toFixed(2)}`);
// // console.log(`Highest: ${highest}`);
// // console.log(`Lowest: ${lowest}`);
// // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // The Array Problem
// // Hour 3
// const elijahArray = [
//   "Elijah",
//   "Cabanero",
//   2037 - 2004,
//   "developer",
//   ["Daniel", "Rafael", "Marco"],
// ];
// console.log(elijahArray[0]); // What is this? firstName?
// console.log(elijahArray[1]); // lastName?
// console.log(elijahArray[2]); // age?

// ////////////////////////////////////
// // Objects - Creation with Object Literal Syntax
// console.log("=== OBJECTS ===");

// const elijah = {
//   firstName: "Elijah",
//   lastName: "Cabanero",
//   age: 2037 - 2004,
//   job: "developer",
//   friends: ["Daniel", "Rafael", "Marco"],
// };
// console.log(elijah);

// const elijahArray2 = [
//   "Elijah",
//   "Cabanero",
//   33,
//   "developer",
//   ["Daniel", "Rafael", "Marco"],
// ];

// const elijahObject = {
//   firstName: "Elijah",
//   lastName: "Cabanero",
//   age: 33,
//   job: "developer",
//   friends: ["Daniel", "Rafael", "Marco"],
// };

// // Dot notation
// console.log(elijah.firstName); // 'Elijah'
// console.log(elijah.lastName); // 'Cabanero'
// console.log(elijah.age); // 33
// console.log(elijah.job); // 'developer'
// console.log(elijah.friends);

// // Bracket notation
// console.log(elijah["firstName"]);
// console.log(elijah["lastName"]);
// console.log(elijah["age"]);

// const nameKey = "Name";
// console.log(elijah["first" + nameKey]); // 'Elijah'
// console.log(elijah["last" + nameKey]); // 'Cabanero'

// // Modify properties
// elijah.job = "software engineer";
// elijah["age"] = 30;
// console.log(elijah);

// // Add new properties
// elijah.location = "Philippines";
// elijah["github"] = "@elijahcabanero";
// elijah.hasDriversLicense = true;
// console.log(elijah);

// // Arrays vs Objects
// const listOfYears = [2004, 2010, 2018, 2025];
// const shoppingList = ["shoes", "shirts", "milk", "bread"];
// const testScores = [90, 88, 95, 100];

// const person = {
//   name: "Elijah",
//   age: 30,
//   occupation: "developer",
// };

// const car = {
//   brand: "Honda",
//   model: "Civic",
//   year: 2022,
//   color: "black",
// };

// const student = {
//   name: "Maya",
//   grades: [92, 88, 95],
//   address: {
//     street: "456 Main St",
//     city: "Manila",
//   },
// };
// console.log(student.grades[0]);
// console.log(student.address.city);

// ////////////////////////////////////
// // Object Methods
// const elijah1 = {
//   firstName: "Elijah",
//   lastName: "Cabanero",
//   birthYear: 2004,
//   job: "developer",
//   friends: ["Daniel", "Rafael", "Marco"],
//   hasDriversLicense: true,
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };
// console.log(elijah1.calcAge(2004));
// console.log(elijah1.calcAge(elijah1.birthYear));

// const elijahImproved = {
//   firstName: "Elijah",
//   lastName: "Cabanero",
//   birthYear: 2004,
//   job: "developer",
//   friends: ["Daniel", "Rafael", "Marco"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     return 2037 - this.birthYear;
//   },
// };
// console.log(elijahImproved.calcAge());

// const elijahAdvanced = {
//   firstName: "Elijah",
//   lastName: "Cabanero",
//   birthYear: 2004,
//   job: "developer",
//   friends: ["Daniel", "Rafael", "Marco"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };
// console.log(elijahAdvanced.calcAge());
// console.log(elijahAdvanced.age);
// console.log(elijahAdvanced.getSummary());

// =======================
// Hour 4 – DOM Practice
// =======================
const message = document.querySelector(".message");
console.log(message);

const button = document.querySelector("#btn");
console.log(button);

const heading = document.querySelector("h1");
console.log(heading);

console.log(message.textContent);
console.log(button.id);
console.log(heading.textContent);

const buttonById = document.getElementById("btn");
console.log(buttonById);
console.log(buttonById === button);

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);
console.log(allParagraphs[0]);

// Modify elements
message.textContent = "Hello From JavaScript!";
message.innerHTML = "<strong>Bold text from JS!</strong>";

const input = document.querySelector(".guess");
console.log(input.value);
input.value = "Default text";

// Style
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "3rem";
button.style.padding = "20px";
button.style.borderRadius = "10px";

// Events
let clickCount = 0;
button.addEventListener("click", function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

// ==========================
// Interactive Score Tracker
// ==========================
const score1El = document.querySelector("#score-1");
const score2El = document.querySelector("#score-2");
const addButtons = document.querySelectorAll(".btn-add");
const resetBtn = document.querySelector("#btn-reset");
const winningScoreInput = document.querySelector("#winning-score");
const targetEl = document.querySelector(".target");
const statusEl = document.querySelector(".status");
const winnerEl = document.querySelector(".winner");
const winnerNameEl = document.querySelector(".winner-name");

let score1 = 0;
let score2 = 0;
let winningScore = parseInt(winningScoreInput.value);
let gameOver = false;

// Update target text
targetEl.textContent = winningScore;

// Handle score increase
addButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (gameOver) return;

    const player = this.dataset.player;

    if (player === "1") {
      score1++;
      score1El.textContent = score1;
      if (score1 === winningScore) {
        endGame(1);
      }
    } else {
      score2++;
      score2El.textContent = score2;
      if (score2 === winningScore) {
        endGame(2);
      }
    }
  });
});

function endGame(winner) {
  gameOver = true;
  if (winner === 1) {
    document.querySelector(".player-1").classList.add("winner");
    document.querySelector(".player-2").classList.add("loser");
    winnerNameEl.textContent = "Player 1";
  } else {
    document.querySelector(".player-2").classList.add("winner");
    document.querySelector(".player-1").classList.add("loser");
    winnerNameEl.textContent = "Player 2";
  }
  winnerEl.classList.remove("hidden");
  statusEl.textContent = "Game Over!";
}

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  score1 = 0;
  score2 = 0;
  gameOver = false;
  score1El.textContent = 0;
  score2El.textContent = 0;
  statusEl.textContent = `First to ${winningScore} wins!`;
  winnerEl.classList.add("hidden");

  document.querySelector(".player-1").classList.remove("winner", "loser");
  document.querySelector(".player-2").classList.remove("winner", "loser");
}

winningScoreInput.addEventListener("input", function () {
  winningScore = parseInt(this.value);
  targetEl.textContent = winningScore;
  resetGame();
});

