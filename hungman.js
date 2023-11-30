
function replaceSecondLetterWithUnderscore(hangmanString) {
    let result = "_";
  
    for (let i = 1; i < hangmanString.length; i++) {
        if (i % 2 === 0) {
            result += "_";
        } else {
            result += hangmanString[i];
        }
    }

    return result;
}

// Example usage:
const hangmanString = "hangman";
const replacedString = replaceSecondLetterWithUnderscore(hangmanString);
console.log(replacedString);  // Output: "_a_g_a_"
