/* Licensed under the Zero-BSD License, this is free software. 
   Written by Mac Young on March 8, 2023.
   Version 1.0*/

/* * * * * Y A C H T * * * * */

/*VARIABLES*/

let dice = ['','','','',''];		// For the five dice, of course!
let rolls_left = 3;					// We got to know how many rolls we have left in a round.
let total = 0;						// This is the placeholder for the total score for the game.
let choices_left = 12;				// For internally checking to see if it is game over.
let value_count = [0,0,0,0,0,0];	// For calculating point values in certain functions.

/*FUNCTIONS*/

/* Update Rolls simply writes to the browser how many rolls the player has left. */
function update_rolls() {
	document.getElementById('rolls_left').textContent = "Rolls left: " + rolls_left;
}

/* Update Total writes to the browser the player's current score. */
function update_total() {
	document.getElementById('total').textContent = total;
}

/* Game Over makes note of a choice being made, then checks to see if all the choices were made. 
   If they were, announce the end of the game. */
function game_over() {
	choices_left -= 1;
	if (choices_left === 0) {
		document.getElementById('roll_dice').disabled = true;
		alert("GAME OVER! Your score for this game is: " + total);
	}
}

/* Randomize finds a random number between 1 and 6 and returns the result. */
function randomize() {
	return Math.floor((Math.random() * 6) + 1);
}

/* All Dice Held checks to see if all dice are being held. */
function all_dice_held() {
	if (document.getElementById('hold_one').checked === true &&
		document.getElementById('hold_two').checked === true &&
		document.getElementById('hold_three').checked === true &&
		document.getElementById('hold_four').checked === true &&
		document.getElementById('hold_five').checked === true) {
		return true;
	}
	else {
		return false;
	}
}

/* Roll will check each die to see it is being held. If it isn't, the die will be "rolled" by
   running the Randomize functuion, then displaying the result in the browser. */
function roll() {
	dice.forEach(function (d, index) {
		switch (index) {
			case 0:
				if (document.getElementById('hold_one').checked === false) {
					dice[index] = randomize();
				}
				document.getElementById('die_one').textContent = dice[0];
				break
			case 1:
				if (document.getElementById('hold_two').checked === false) {
					dice[index] = randomize();
				}
				document.getElementById('die_two').textContent = dice[1];
				break
			case 2:
				if (document.getElementById('hold_three').checked === false) {
					dice[index] = randomize();
				}
				document.getElementById('die_three').textContent = dice[2];
				break
			case 3:
				if (document.getElementById('hold_four').checked === false) {
					dice[index] = randomize();
				}
				document.getElementById('die_four').textContent = dice[3];
				break
			case 4:
				if (document.getElementById('hold_five').checked === false) {
					dice[index] = randomize();
				}
				document.getElementById('die_five').textContent = dice[4];
				break
			default:
				console.log("An error has occured with the dice.");
				break
		}
	});
	update_rolls();
}

/* Pre-roll will check to see if the player has any rolls left. If so, a message box will
   appear, telling the player so. If not, it will make note that a roll is used, then allows
   the dice-rolliing process to proceed. */
function pre_roll() {
	if (rolls_left > 0 && all_dice_held() === false) {
		if (rolls_left === 3) {
			document.getElementById('hold_one').disabled = false;
			document.getElementById('hold_two').disabled = false;
			document.getElementById('hold_three').disabled = false;
			document.getElementById('hold_four').disabled = false;
			document.getElementById('hold_five').disabled = false;
		}
		rolls_left -= 1;
		roll();
	}
	else if (rolls_left > 0 && all_dice_held() === true) {
		alert("It doesn't make much sense to roll none of the dice... Just saying.");
	}
	else {
		alert("You've rolled three times already! At this point, you'll have to choose one the options on the score sheet.");
	}
}

/* Next Round calls the Clear function and also updates the total. */
function next_round() {
	clear();
	update_total();
}

/* Clear resets the dice, holding checkboxes, and available rolls. */
function clear() {
	document.getElementById('die_one').textContent = '';
	document.getElementById('hold_one').checked = false;
	document.getElementById('hold_one').disabled = true;
	document.getElementById('die_two').textContent = '';
	document.getElementById('hold_two').checked = false;
	document.getElementById('hold_two').disabled = true;
	document.getElementById('die_three').textContent = '';
	document.getElementById('hold_three').checked = false;
	document.getElementById('hold_three').disabled = true;
	document.getElementById('die_four').textContent = '';
	document.getElementById('hold_four').checked = false;
	document.getElementById('hold_four').disabled = true;
	document.getElementById('die_five').textContent = '';
	document.getElementById('hold_five').checked = false;
	document.getElementById('hold_five').disabled = true;
	rolls_left = 3;
	value_count = [0,0,0,0,0,0];
	update_rolls();
}

/* New Game resets the dice, holding checkboxes, avalilablle rolls, and the score sheet, so a
   clean slate is produced. */
function new_game() {
	total = 0;
	choices_left = 12;
	document.getElementById('roll_dice').disabled = false;
	document.getElementById('ones').textContent = "";
	document.getElementById('s_ones').disabled = false;
	document.getElementById('twos').textContent = "";
	document.getElementById('s_twos').disabled = false;
	document.getElementById('threes').textContent = "";
	document.getElementById('s_threes').disabled = false;
	document.getElementById('fours').textContent = "";
	document.getElementById('s_fours').disabled = false;
	document.getElementById('fives').textContent = "";
	document.getElementById('s_fives').disabled = false;
	document.getElementById('sixes').textContent = "";
	document.getElementById('s_sixes').disabled = false;
	document.getElementById('fullhouse').textContent = "";
	document.getElementById('s_fh').disabled = false;
	document.getElementById('fofk').textContent = "";
	document.getElementById('s_fofk').disabled = false;
	document.getElementById('lstraight').textContent = "";
	document.getElementById('s_ls').disabled = false;
	document.getElementById('bstraight').textContent = "";
	document.getElementById('s_bs').disabled = false;
	document.getElementById('choice').textContent = "";
	document.getElementById('s_choice').disabled = false;
	document.getElementById('yacht').textContent = "";
	document.getElementById('s_yacht').disabled = false;
	next_round();
}

/* Here is our Score Sheet options! */

/* Ones adds the total of all 1s found among the dice then adds them to the score. */
function ones() {
	document.getElementById('s_ones').disabled = true;
	let sum = 0;
	for(let a = 0; a < dice.length; a++) {
		if (dice[a] === 1) { sum += 1 * 1; }
	}
	document.getElementById('ones').textContent = sum;
	total += sum*1;
	rolls = 3;
	next_round();
	game_over();
}

/* Twos adds the total of all 2s. */
function twos() {
	document.getElementById('s_twos').disabled = true;
	let sum = 0;
	for(let a = 0; a < dice.length; a++) {
		if (dice[a] === 2) { sum += 2 * 1; }
	}
	document.getElementById('twos').textContent = sum;
	total += sum*1;
	rolls = 3;
	next_round();
	game_over();
}

/* Threes adds the total of all 3s. */
function threes() {
	document.getElementById('s_threes').disabled = true;
	let sum = 0;
	for(let a = 0; a < dice.length; a++) {
		if (dice[a] === 3) { sum += 3 * 1; }
	}
	document.getElementById('threes').textContent = sum;
	total += sum*1;
	rolls = 3;
	next_round();
	game_over();
}

/* Fours adds the total of all 4s. */
function fours() {
	document.getElementById('s_fours').disabled = true;
	let sum = 0;
	for(let a = 0; a < dice.length; a++) {
		if (dice[a] === 4) { sum += 4 * 1; }
	}
	document.getElementById('fours').textContent = sum;
	total += sum*1;
	rolls = 3;
	next_round();
	game_over();
}

/* Fives adds the total of all 5s. */
function fives() {
	document.getElementById('s_fives').disabled = true;
	let sum = 0;
	for(let a = 0; a < dice.length; a++) {
		if (dice[a] === 5) { sum += 5 * 1; }
	}
	document.getElementById('fives').textContent = sum;
	total += sum*1;
	rolls = 3;
	next_round();
	game_over();
}

/* Sixes adds the total of all 6s. */
function sixes() {
	document.getElementById('s_sixes').disabled = true;
	let sum = 0;
	for(let a = 0; a < dice.length; a++) {
		if (dice[a] === 6) { sum += 6 * 1; }
	}
	document.getElementById('sixes').textContent = sum;
	total += sum*1;
	rolls = 3;
	next_round();
	game_over();
}

/* Fullhouse looks for a two of a kind of one number, and a three of a kind of another,
   and should it find both, it rewards the player with 25 points. */
function fullhouse() {
	document.getElementById('s_fh').disabled = true;
	let pair, trio = false;
	let reward = 0;
	for (let a = 0; a < value_count.length; a++) {
		for (let b = 0; b < dice.length; b++) {
			if (dice[b] === a+1*1) { value_count[a] += 1*1; }
		}
		if (value_count[a] === 2) { pair = true; }
		else if (value_count[a] === 3) { trio = true; }
	}
	if (pair === true && trio === true) { reward = 25; }
	document.getElementById('fullhouse').textContent = reward;
	total += reward*1;
	rolls = 3;
	next_round();
	game_over();
}

/* Fofk looks for a four of a kind of any number, and if it finds one, the player is awarded
   the total of all dice. */
function fofk() {
	document.getElementById('s_fofk').disabled = true;
	let quartet = false;
	let reward = 0;
	for (let a = 0; a < value_count.length; a++) {
		let temp = 0;
		for (let b = 0; b < dice.length; b++) {
			if (dice[b] === a+1*1) { value_count[a] += 1*1; }
			temp += dice[b]*1;
		}
		if (value_count[a] === 4) {
			quartet = true;
			reward = temp;
			break;
		}
	}
	document.getElementById('fofk').textContent = reward;
	total += reward*1;
	rolls = 3;
	next_round();
	game_over();
}

/* lstraight looks for a "little straight," which composes of 1, 2, 3, 4, and 5. If it 
   finds them all, the player is rewarded with 30 points. */
function lstraight() {
	document.getElementById('s_ls').disabled = true;
	let reward = 0;
	for (let a = 0; a < dice.length; a++) {
		if (dice[a] === 6) { break; }
		else { value_count[dice[a]-1*1]++; }
	}
	for (let b = 0; b < 5; b++) {
		if (b != 4 && value_count[b] === 1) { continue; }
		else if (b === 4 && value_count[b] === 1) { reward = 30; }
		else { break; }
	}
	document.getElementById('lstraight').textContent = reward;
	total += reward*1;
	rolls = 3;
	next_round();
	game_over();
}

/* Bstraight is the same thing as Lstraight, only it looks for a "Big Straight," which 
   composes of 2, 3, 4, 5, and 6. */
function bstraight() {
	document.getElementById('s_bs').disabled = true;
	let reward = 0;
	for (let a = 0; a < dice.length; a++) {
		if (dice[a] === 1) { break; }
		else { value_count[dice[a]-1*1]++; }
	}
	for (let b = 1; b < value_count.length; b++) {
		if (b != 5 && value_count[b] === 1) { continue; }
		else if (b === 5 && value_count[b] === 1) { reward = 30; }
		else { break; }
	}
	document.getElementById('bstraight').textContent = reward;
	total += reward*1;
	rolls = 3;
	next_round();
	game_over();
}

/* Choice adds the total of all dice. */
function choice() {
	document.getElementById('s_choice').disabled = true;
	let sum = 0;
	for(let a = 0; a < dice.length; a++) {
		sum += dice[a] * 1;
	}
	document.getElementById('choice').textContent = sum;
	total += sum*1;
	rolls = 3;
	next_round();
	game_over();
}

/* Yacht rewards the player with 50 points if it finds out that all of the dice show the 
   same number. */
function yacht() {
	document.getElementById('s_yacht').disabled = true;
	let reward = 0;
	for (let a = 0; a < dice.length; a++) {
		value_count[dice[a]-1*1]++;
		if (value_count[dice[a]-1*1] === 5) {
			reward = 50;
			break;
		}
	}
	document.getElementById('yacht').textContent = reward;
	total += reward*1;
	rolls = 3;
	next_round();
	game_over();
}

/*LISTENERS*/

document.getElementById('roll_dice').addEventListener('click', pre_roll);	// Roll Button
document.getElementById('clear_all').addEventListener('click', new_game);	// New Game Button

/* Chooser listeners */

document.getElementById('s_ones').addEventListener('click', ones);		// Ones
document.getElementById('s_twos').addEventListener('click', twos);		// Twos
document.getElementById('s_threes').addEventListener('click', threes);	// Threes
document.getElementById('s_fours').addEventListener('click', fours);	// Fours
document.getElementById('s_fives').addEventListener('click', fives);	// Fives
document.getElementById('s_sixes').addEventListener('click', sixes);	// Sixes
document.getElementById('s_fh').addEventListener('click', fullhouse);	// Full House
document.getElementById('s_fofk').addEventListener('click', fofk);		// Four of a Kind
document.getElementById('s_ls').addEventListener('click', lstraight);	// Little Straight
document.getElementById('s_bs').addEventListener('click', bstraight);	// Big Straight
document.getElementById('s_choice').addEventListener('click', choice);	// Choice
document.getElementById('s_yacht').addEventListener('click', yacht);	// Yacht

/*INITIALIZERS*/

new_game();		// LET THE GAME BEGIN!!!