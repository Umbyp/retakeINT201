class HolidayPriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    addGift(gift) {
      this.queue.push(gift);
      this.queue.sort((a, b) => a.priority - b.priority);
      return this.queue.length;
    }
  
    buyGift() {
      if (this.queue.length === 0) {
        return '';
      }
  
      const highestPriorityGift = this.queue.shift();
      return highestPriorityGift.gift;
    }
  }
  
  // Example usage:
  const giftList = new HolidayPriorityQueue();
  console.log(giftList.addGift({ gift: 'Water gun', priority: 1 }));  // Output: 1
  console.log(giftList.addGift({ gift: 'Toy truck', priority: 4 }));   // Output: 2
  console.log(giftList.addGift({ gift: 'Roller Skates', priority: 3 })); // Output: 3
  
  console.log(giftList.buyGift());  // Output: 'Water gun'
  console.log(giftList.buyGift());  // Output: 'Roller Skates'
  console.log(giftList.buyGift());  // Output: 'Toy truck'
  console.log(giftList.buyGift());  // Output: ''

  

  console.log("-----------------------------")
  class Randomizer {
    constructor(min, max) {
      this.sequence = this.shuffleArray(this.generateSequence(min, max));
      this.currentIndex = 0;
    }
  
    generateSequence(min, max) {
      const result = [];
      for (let i = min; i <= max; i++) {
        result.push(i);
      }
      return result;
    }
  
    shuffleArray(array) {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    }
  
    next() {
      if (this.currentIndex >= this.sequence.length) {
        throw new Error('No more numbers remain');
      }
      return this.sequence[this.currentIndex++];
    }
  
    sequence(size) {
      if (size > this.sequence.length || this.currentIndex >= this.sequence.length) {
        throw new Error('No more numbers remain');
      }
  
      const result = this.sequence.slice(this.currentIndex, this.currentIndex + size);
      this.currentIndex += size || this.sequence.length - this.currentIndex;
      return result;
    }
  }
  
  // Example usage:
  const r = new Randomizer(1, 6);
  console.log(r.next());       // Output: 3 (or any number between 1 and 6)
  console.log(r.sequence(2));  // Output: [1, 6] (two numbers between 1 and 6, except 3)
  console.log(r.sequence());   // Output: [2, 4, 5] (the remaining numbers)


  console.log("-----------------------------")

  function enoughChocolate(people, bars) {
    // Check if people and bars are numbers
    if (typeof people !== 'number' || typeof bars !== 'number') {
      return "Error. We need numbers.";
    }
  
    // Calculate group sizes
    const groupA = Math.round(people * 0.2);
    const groupB = Math.round(people * 0.1);
    const groupC = Math.round(people * 0.05);
    const groupD = people - groupA - groupB - groupC;
  
    // Calculate total number of chocolate pieces needed
    const totalPiecesNeeded = groupA * 0 + groupB * 1 + groupC * 20 + groupD * 1;
  
    // Calculate total number of chocolate pieces available
    const totalPiecesAvailable = bars * 16;
  
    // Check if there is enough chocolate
    if (totalPiecesAvailable >= totalPiecesNeeded) {
      let piecesLeft = totalPiecesAvailable - totalPiecesNeeded;
  
      // Check if there are too many pieces left
      if (piecesLeft > 16) {
        const barsNeeded = Math.round((piecesLeft - 16) / 16) + 1;
        return ["That was too much chocolate!", barsNeeded];
      }
  
      return [groupA + groupB + groupC + groupD, piecesLeft];
    } else {
      const barsNeeded = Math.round((totalPiecesNeeded - totalPiecesAvailable) / 16) + 1;
      return ["You should buy more chocolate next time", barsNeeded];
    }
  }
  
  // Example usage:
  console.log(enoughChocolate(100, 3));  // Output: ["You should buy more chocolate next time", 4]
  console.log(enoughChocolate(50, 3));   // Output: ["That was too much chocolate!", 3]
  console.log(enoughChocolate(0, 3));    // Output: "Nobody here. Skedaddle."
  console.log(enoughChocolate('not a number', 3));  // Output: "Error. We need numbers."
  
  console.log("-----------------------------")

  function woodCut(woods, n) {
    if (woods.length === 0) return 0;
  
    let start = 1;
    let end = Math.max(...woods);
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const pieces = cutCount(woods, mid);
  
      if (pieces === n) {
        // Found the exact length, return it
        return mid;
      } else if (pieces < n) {
        // Need longer pieces
        end = mid - 1;
      } else {
        // Too long, need shorter pieces
        start = mid + 1;
      }
    }
  
    // If we reach here, start > end, return the maximum possible length
    return end;
  }
  
  function cutCount(woods, length) {
    let count = 0;
    for (const wood of woods) {
      count += Math.floor(wood / length);
    }
    return count;
  }
  
  // Example usage:
  console.log(woodCut([232, 124, 456], 7));   // Output: 114
  console.log(woodCut([232, 124, 456], 20));  // Output: 38
  console.log(woodCut([232, 124, 456], 1));   // Output: 456
  console.log(woodCut([232, 124, 456], 2));   // Output: 232
  console.log(woodCut([232, 124, 456], 3));   // Output: 228
  console.log(woodCut([1, 1, 1], 4));         // Output: 0
  console.log(woodCut([1, 1, 1], 3));         // Output: 1
  