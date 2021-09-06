/**
 * Manjoot Narwal - AND Coding Challenge
 */

function solution(input) {
  let trimmedInput = input.replace(/\s+/g, '');
  let numberInput = trimmedInput.replace(/\D+/g, '')
  let finalArr = []

  if (!(/\d/.test(trimmedInput))) { //if the input does not contains an integer
    throw new Error("Your input does not contain any integers.");
  } else if (numberInput.length === 1) {
    return numberInput;
  } else {
    finalArr = solutionHelper(numberInput); //calls helper function and passes through input with non-integers removed
    return finalArr;
  }

}

function solutionHelper(inputString) {
  let andSiblings = [];

  for (let strCharPos = 0; strCharPos < inputString.length; strCharPos++) {
    const primaryChar = inputString[strCharPos];
    const otherChars = inputString.substring(0, strCharPos) + inputString.substring(strCharPos + 1);
    let otherCharsArr = otherChars.split("");


    for (let otherCharPos = 0; otherCharPos < otherCharsArr.length; otherCharPos++) {
      andSiblings.push(primaryChar + otherCharsArr.join(""));
      otherCharsArr.unshift(otherCharsArr.pop());
    }

  }

  return andSiblings.sort().reverse().join(','); //sorts the AND Siblings array into descending order and turns into string
}


/**
 * Example inputs
 */

// provided example inputs
console.log(solution("326")); // expected ouput 632,623,362,326,263,236
console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236

//extra example inputs i've put
//console.log(solution("ABC")); //expected output to be an error
//console.log(solution(" ")); //expected output to be an error
//console.log(solution("32")); // expected output 32 23
//console.log(solution("1")); //expected output 1
//console.log(solution("4567")) //expected output 7645,7564,7456,6745,6574,6457,5746,5674,5467,4756,4675,4567
//console.log(solution('ZA3')); //expected output 3