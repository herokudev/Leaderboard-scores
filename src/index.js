import './style.css';
import appdata from './appData';

const scoresList = document.querySelector("#scores-List");
const addName = document.querySelector("#addName");
const addScore = document.querySelector("#addScore");
const btnSubmit = document.querySelector("#btnSubmit");
const btnRefresh = document.querySelector("#btnRefresh");

const addScoreBtn = () => {
  const row = document.createElement('tr');  
  row.innerHTML = `
    <td>${addName.value}: ${addScore.value} </td>
  `;
  scoresList.appendChild(row);
  appdata.addNewScore(addName.value, addScore.value);
  addName.value = "";
  addScore.value = "";    
}

const addScoresList = () => {
  let scoresTable = scoresList;
  while(scoresTable.hasChildNodes())
  {
    scoresTable.removeChild(scoresTable.firstChild);
  }
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zqPTnNutkbrCACFiMaEs/scores/', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => populateList(data.result));
}

const populateList = (scores) => {
  scores.forEach((s) => {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${s.user}: ${s.score} </td>    
      `;
      scoresList.appendChild(row);
  });    
}

document.addEventListener('DOMContentLoaded', () => {
  addScoresList();
});

btnSubmit.addEventListener('click', addScoreBtn);

btnRefresh.addEventListener('click', addScoresList);

