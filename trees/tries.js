const { CITY_NAMES } = require("./store/cities.js");

class Node {
  constructor(value, root = false) {
    this.value = value;
    this.root = root;
    this.isEndOfWord = false;

    this.suggestions = []; 
    this.nextLetters = {};
  }

  addWordToTrie(word) {
    let currentNode = this;

    for (const letter of word) {
      if (!currentNode.nextLetters[letter]) {
        currentNode.nextLetters[letter] = new Node(letter);
      }
      currentNode = currentNode.nextLetters[letter];
    }

    currentNode.isEndOfWord = true;
  }
  
    collectSuggestions(startNode, startWord) {
    const suggestions = [];
    const queue = [{ node: startNode, word: startWord }];
  
    while (queue.length > 0 && suggestions.length < 3) {
      const element = queue.shift();
      const currentNode = element.node;
      const currentWord = element.word;
  
      if (currentNode.isEndOfWord) {
        suggestions.push(currentWord);
      }
  
      for (const letter in currentNode.nextLetters) {
        queue.push({ node: currentNode.nextLetters[letter], word: currentWord + letter });
      }
    }
  
    return suggestions;
  }

  generateSuggestions(partialWord) {
    this.suggestions = [];
    let currentNode = this;
    let prefix = '';

    for (const letter of partialWord) {
      if (!currentNode.nextLetters[letter]) return;
      currentNode = currentNode.nextLetters[letter];
      prefix += letter;
    }

    this.getSuggestions(currentNode, prefix);
  }

  complete(partialWord) {
    this.generateSuggestions(partialWord);
    return this.suggestions;
  }
}

const createTrie = (words) => {
  const root = new Node("", true);

  for (const word of words) {
    root.addWordToTrie(word);
  }

  console.log('Auto Complete:', root.complete('New Y'));
  return root;
};

createTrie(CITY_NAMES);
