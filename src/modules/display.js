import { getScore } from './getScore.js';

const displayScore = async () => {
  const res = await getScore();
  const scorelist = document.querySelector('.the-list-Score');
  scorelist.innerHTML = '';
  res.forEach((score) => {
    scorelist.innerHTML += `<li>
    ${score.user}:${score.score}
   </li>`;
  });
};

export default displayScore;