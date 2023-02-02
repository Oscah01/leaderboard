import './style.css';
import { leaderBoard } from './modules/scores.js';
import displayScores from './modules/display.js';

// const add = document.querySelector('#add');
const adding = document.getElementById('add');
const refresh = document.getElementById('refresh');
const score = document.getElementById('score');
const user = document.getElementById('user');

adding.addEventListener('click', async (e) => {
  e.preventDefault();
  await leaderBoard(user.value, Number(score.value));
  user.value = '';
  score.value = '';
});

refresh.addEventListener('click', async () => {
  window.location.reload();
  displayScores();
});

document.addEventListener('DOMContentLoaded', async () => {
  displayScores();
});
