// 1. Centralize DOM Elements in a single object
const scoreEls = {
  home: document.querySelector('#home .score'),
  guest: document.querySelector('#guest .score'),
};

// 2. Centralize Scores in a single state object
let scores = {
  home: 0,
  guest: 0,
};

// 3. Function to update the score display for a given team
const updateUI = (team) => {
  // Use bracket notation to access the correct DOM element dynamically (e.g., scoreEls['home'])
  scoreEls[team].textContent = scores[team];
};

// 4. Initialization: Set initial score display
updateUI('home');
updateUI('guest');

// 5. Single, Dynamic Function to Add Points
/**
 * Adds a specified amount of points to a team's score.
 * @param {('home'|'guest')} team - The team to add points to.
 * @param {number} amount - The number of points (1, 2, or 3).
 */
const addPoints = (team, amount) => {
  // Use bracket notation to update the score object dynamically (e.g., scores['home'] += 1)
  scores[team] += amount;
  updateUI(team);

  console.log(`Updated ${team} score: ${scores[team]}`);
};

// 6. Refactored Reset Function
const resetScores = () => {
  scores.home = 0;
  scores.guest = 0;

  // Update both displays
  updateUI('home');
  updateUI('guest');
};
