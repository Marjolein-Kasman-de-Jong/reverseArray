// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Challenge: reverseArray()
// ---------------------------------------------------------------------------

// Initiates input array

const sentence = ['sense.','make', 'all', 'will', 'This'];

// Reverses input array without using Array.reverse()

function reverseArray(sentence) {
    let index = sentence.length - 1;
    let output = [];
    while (index >= 0) {
        output.push(sentence[index]);
        index--;
    }
    return output;
}

// Logs reversed array to console

console.log(reverseArray(sentence)) 
