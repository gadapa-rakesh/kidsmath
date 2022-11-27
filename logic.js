const PART_1 = 'part1';
const PART_2 = 'part2';
const NUM_PROBLEMS = 'numProblems';

var numProblems = 0;

function start() {
    nextProblem();
}

function updateProblemCount(){
    numProblems++;
    var element = document.getElementById(NUM_PROBLEMS);
    element.innerText = numProblems;
}

function updateText(id, newVal) {
    var element = document.getElementById(id);
    element.innerText = newVal;
}

function getValue(id) {
    return document.getElementById(id)?.innerText;
}

function getRandomArbitrary() {
    return getRandom(0, 10);
}

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function nextProblem() {
    updateProblemCount();
    var part1Random = getRandomArbitrary();
    updateText(PART_1, part1Random);

    var part2Random = getRandomArbitrary();
    updateText(PART_2, part2Random);

    // var randOp = getRandomOperator();
    // updateText('operator', randOp);
}

function getRandomOperator() {
    var randomOpRef = getRandom(1, 3);
    if(randomOpRef == 1) return '+';
    else if(randomOpRef === 2) return '-';
    else return 'x';
}

start();