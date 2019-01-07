let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Going straight to line 5, all 3 suspects are called using The
// let variables (line 1-3) however suspectThree is over-riden by Colonel Mustard
// is declared on line 6 part of function on line5.
// At the end, (line12) Mrs Peacock is choosen because she is declared on the outside-globally.
