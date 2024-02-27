function solution(A) {
    const occurrences = {};
  
    for (let element of A) {
      // If the element is already in the occurrences object, delete it
      if (occurrences[element]) {
        delete occurrences[element];
      } else {
        // Otherwise, add the element to the occurrences object
        occurrences[element] = true;
      }
    }
  
    // The remainder in occurrences is the unpaired element
    return parseInt(Object.keys(occurrences)[0], 10);
  }
  