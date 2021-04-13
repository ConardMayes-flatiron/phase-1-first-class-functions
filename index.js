function runFiveMiles() {
    console.log('Go for a five-mile run');

}

function liftWeights() {
    console.log('Pump iron');
}

function swimFortyLaps(){
    console.log('Swim 40 laps');
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunAcivity();
}



function Monday() {
  excerciseRoutine(liftWeights);
}

function Tuesday() {
  excerciseRoutine(swimFortyLaps);
}

function Wednesday() {
  excerciseRoutine(runFiveMiles);
}

function Thursday() {
    excerciseRoutine(liftWeights);
}

function Friday() {
    excerciseRoutine(swimFortyLaps);
} 

excerciseRoutine(() => console.log('Stretch! Work that core!'));

function callback(){
    returns `callback, yo!`;
}
const receivesAFunction(callback) {
    return callback();
}

receivesAFunction();