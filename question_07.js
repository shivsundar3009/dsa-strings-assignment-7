function backspaceCompare(s, t) {
    // Helper function to process the input string and return the final result
    function processString(str) {
      const stack = [];
  
      for (let char of str) {
        if (char === '#') {
          stack.pop(); // Remove the last character
        } else {
          stack.push(char); // Add the character to the stack
        }
      }
  
      return stack.join(''); // Convert the stack to a string
    }
  
    // Process both input strings and compare the results
    const processedS = processString(s);
    const processedT = processString(t);
  
    return processedS === processedT;
  }