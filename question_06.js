let rotateString = function(s, goal) {
    if (s.length !== goal.length) {
      return false; // If the lengths are different, they can't be equal after any number of shifts
    }
  
    const doubleS = s + s; // Double the original string to consider all possible shifts
  
    return doubleS.includes(goal);
  
  };