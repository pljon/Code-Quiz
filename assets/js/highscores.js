var $scoreList = document.getElementById("score-list");
var clearScoresBtn = document.getElementById("clear-scores");

function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('score')) || [];
};

var currentlyInStorage = getFromLocalStorage();
var html=``;
for (var i=0; i<currentlyInStorage.length; i++) {
    // Sort highscores in local storage from high to low
    currentlyInStorage.sort((a, b) => b.score - a.score)
    var $li = `<li>${currentlyInStorage[i].initials} : ${currentlyInStorage[i].score} </li>`;

    html+=$li;
};

// Clear local storage function
function clearLocalStorage(event) {
    localStorage.clear();
    location.reload();
}

// Clear local storage function on click
clearScoresBtn.addEventListener('click', clearLocalStorage);

$scoreList.innerHTML = html;