let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);


// The answer is First Verdict: The murderer is Mrs Peacock
// Second Verdict: The murderer is Professor Plum because:
// I worked backward drom line 12 to line 11 - the name is Prof Plum
// because his name is declare on line 1.
// First verdict, line 9 leads to line 8, which feeds into the function
// in line 3 where Mrs Peacock is declared as the murderer.
