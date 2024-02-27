function solution(N) {
    // Convert N to binary
    const binaryString = N.toString(2);
    
    let maxGap = 0; // To store the maximum gap length
    let currentGap = 0; // To store the current gap length

    // Mark the start of counting zeros
    let counting = false;

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            // If a '1' is found and you're currently counting, check if the current gap is the largest
            if (counting) {
                maxGap = Math.max(maxGap, currentGap);
                currentGap = 0; // Reset current gap for the next sequence
            } else {
                // If we find a '1' and are not counting, we start counting
                counting = true;
            }
        } else if (counting) {
            // If we are counting and find a '0', increase the current gap
            currentGap++;
        }
    }

    return maxGap;
}
