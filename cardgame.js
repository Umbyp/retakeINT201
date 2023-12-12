function winner(deckSteve, deckJosh) {
    const cardRank = '23456789TJQKA';
  
    let steveScore = 0;
    let joshScore = 0;
  
    for (let i = 0; i < deckSteve.length; i++) {
      const steveCard = deckSteve[i];
      const joshCard = deckJosh[i];
  
      const steveRank = cardRank.indexOf(steveCard);
      const joshRank = cardRank.indexOf(joshCard);
  
      if (steveRank > joshRank) {
        steveScore++;
      } else if (steveRank < joshRank) {
        joshScore++;
      }
    }
  
    if (steveScore > joshScore) {
      return `Steve wins ${steveScore} to ${joshScore}`;
    } else if (steveScore < joshScore) {
      return `Josh wins ${joshScore} to ${steveScore}`;
    } else {
      return 'Tie';
    }
  }
  
  // Example usage:
  const steveDeck = ['A', '7', '8'];
  const joshDeck = ['K', '5', '9'];
  
  console.log(winner(steveDeck, joshDeck)); // Output: "Steve wins 2 to 1"
  