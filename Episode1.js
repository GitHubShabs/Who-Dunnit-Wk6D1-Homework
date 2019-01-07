const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// I predicted the output would be "the murderer is Miss Scarlet"
// because line 12 is called which leads to the function in line 11
// This function is called on line 7 which leads to the line "the murderer is Miss Scarlet"
// where the murderer is Miss Scarlet (line2)
