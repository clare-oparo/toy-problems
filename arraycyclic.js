function solution(A, K) {
    // Check for edge cases
    if (A.length <= 1 || K === 0) {
      return A;
    }
  
    // Optimum number of rotations
    const effectiveRotations = K % A.length;
  
    // If effectiveRotations is 0, the array will not change after K rotations
    if (effectiveRotations === 0) {
      return A;
    }
  
    // Rotate the array by splitting and rejoining
    const splitIndex = A.length - effectiveRotations;
    const partOne = A.slice(0, splitIndex);
    const partTwo = A.slice(splitIndex);
  
    const rotatedArray = partTwo.concat(partOne);
  
    return rotatedArray;
  }
  