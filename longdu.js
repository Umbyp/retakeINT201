// function dup(arr) {
//     const result = [];
  
//     for (const word of arr) {
//       // Use a regular expression to replace consecutive duplicate letters with a single occurrence
//       const cleanedWord = word.replace(/(.)\1+/g, '$1');
//       result.push(cleanedWord);
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const arr1 = ["abracadabra", "allottee", "assessee"];
//   const arr2 = ["kelless", "keenness"];
  
//   const result1 = dup(arr1);
//   const result2 = dup(arr2);
  
//   console.log(result1); // Output: ["abracadabra", "alote", "asese"]
//   console.log(result2); // Output: ["keles", "kenes"]
//   function shiftedDiff(first, second) {
//     if (first.length !== second.length) {
//       return -1; // Different lengths, not a valid rotation
//     }
  
//     for (let i = 0; i < first.length; i++) {
//       const rotated = first.slice(i) + first.slice(0, i);
//       if (rotated === second) {
//         return i;
//       }
//     }
  
//     return -1; // No valid rotation found
//   }
  
//   // Examples:
//   console.log(shiftedDiff("coffee", "eecoff")); // Output: 2
//   console.log(shiftedDiff("eecoff", "coffee")); // Output: 4
//   console.log(shiftedDiff("moose", "Moose"));   // Output: -1
//   console.log(shiftedDiff("isn't", "'tisn"));   // Output: 2
//   console.log(shiftedDiff("Esham", "Esham"));   // Output: 0
//   console.log(shiftedDiff("dog", "god"));       // Output: -1


//   function Movie(name, start, end) {
//     this.name = name;
//     this.start = start;
//     this.end = end;
//   }
  
//   function schedule(movies) {
//     if (!movies || movies.length === 0) {
//       return 0;
//     }
  
//     // Sort movies by their end dates in ascending order
//     movies.sort((a, b) => a.end - b.end);
  
//     let count = 1; // The first movie is always selected
//     let currentEnd = movies[0].end;
  
//     for (let i = 1; i < movies.length; i++) {
//       if (movies[i].start >= currentEnd) {
//         // If the next movie starts after the current one ends, it can be selected
//         count++;
//         currentEnd = movies[i].end;
//       }
//     }
  
//     return count;
//   }
  
//   // Example usage:
//   const movies = [
//     new Movie("Java Joe", 0, 60),
//     new Movie("Looking for Clojure", 1, 5),
//     new Movie("I C You", 6, 10),
//     new Movie("Ruby Park", 11, 14),
//   ];
  
//   console.log(schedule(movies)); // Output: 3
function canCombineWords(set) {
    if (set.length < 3 || set.length > 7) {
      return false; // Invalid input size
    }
  
    // Convert all words to lowercase for case-insensitive comparison
    set = set.map(word => word.toLowerCase());
  
    // Function to check if two words can be combined
    function canCombine(w1, w2) {
      return w1.charAt(w1.length - 1) === w2.charAt(0);
    }
  
    // Helper function to recursively check combinations
    function checkCombinations(remaining, used) {
      if (remaining.length === 0) {
        return true; // All words have been used
      }
  
      for (let i = 0; i < remaining.length; i++) {
        const currentWord = remaining[i];
  
        if (!used.includes(currentWord) &&
            (used.length === 0 || canCombine(used[used.length - 1], currentWord))) {
          // Try combining the current word with the previous ones
          const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
          const newUsed = used.concat(currentWord);
  
          if (checkCombinations(newRemaining, newUsed)) {
            return true;
          }
        }
      }
  
      return false; // No combination found
    }
  
    // Start checking combinations with an empty used array
    return checkCombinations(set, []);
  }
  
  // Examples:
  const set1 = ["excavate", "endure", "desire", "screen", "theater", "excess", "night"];
  const set2 = ["trade", "pole", "view", "grave", "ladder", "mushroom", "president"];
  
  console.log(canCombineWords(set1)); // Output: true
  console.log(canCombineWords(set2)); // Output: false
  
  console.log("-----------------------------")

  function findUniq(arr) {
    // Create an object to store the count of each number
    const countMap = {};
  
    // Iterate through the array and count occurrences of each number
    for (const num of arr) {
      countMap[num] = (countMap[num] || 0) + 1;
    }
  
    // Find the number with count 1 (unique number)
    const uniqueNum = Object.keys(countMap).find(key => countMap[key] === 1);
  
    // Convert the result to a number (as it may be a string)
    return parseFloat(uniqueNum);
  }
  
  // Examples:
  console.log(findUniq([1, 1, 1, 2, 1, 1]));   // Output: 2
  console.log(findUniq([0, 0, 0.55, 0, 0]));   // Output: 0.55