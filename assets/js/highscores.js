var $scoreList = document.getElementById("score-list");

function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('score')) || [];
};

var currentlyInStorage = getFromLocalStorage();
var html=``;
for (var i=0; i<currentlyInStorage.length; i++) {
    //TEMPLATE LITERAL---understand these cause concatenation sucksssss
    var $li = `<li>${currentlyInStorage[i].initials} : ${currentlyInStorage[i].score} </li>`;
    // see concatenation stinks
    // var li = "<li>"+ currentlyInStorage[i].initials + " : " + currentlyInStorage[i].score + "</li>"
    html+=$li;
};
$scoreList.innerHTML = html;