function findDefectiveCharacters(correct, wrong) {
    const defectiveCharacters = [];

    for (let i = 0; i < correct.length; i++) {
        if (correct[i] !== wrong[i]) {
            defectiveCharacters.push(wrong[i]);
        }
    }

    return defectiveCharacters;
}

// Example usage:
const correctString = "Foobar";
const wrongString = "Fiibnr";
const defectiveChars = findDefectiveCharacters(correctString, wrongString);

console.log(defectiveChars);  // Output: ['o', 'a']
