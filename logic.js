const PART_1 = 'part1', PART_2 = 'part2';

function start() {
    nextProblem();
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