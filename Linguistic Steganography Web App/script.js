// Word pairs to encode bits (0 or 1) into a natural sentence.
const wordMap = [
    { zero: 'dog', one: 'hound' },
    { zero: 'jumps', one: 'leaps' },
    { zero: 'over', one: 'above' },
    { zero: 'lazy', one: 'slow' },
];

// Convert a string to binary
function toBinary(str) {
    return str.split('')
              .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
              .join('');
}

// Convert binary back to a string
function binaryToString(binary) {
    let chars = [];
    for (let i = 0; i < binary.length; i += 8) {
        chars.push(String.fromCharCode(parseInt(binary.slice(i, i + 8), 2)));
    }
    return chars.join('');
}

// Encode the secret message
function encodeMessage(secretMessage) {
    const binary = toBinary(secretMessage);
    let encodedSentence = '';

    for (let i = 0; i < binary.length; i++) {
        const bit = binary[i];
        const wordPair = wordMap[i % wordMap.length];

        encodedSentence += (bit === '0' ? wordPair.zero : wordPair.one) + ' ';
    }

    return encodedSentence.trim();
}

// Decode the hidden message from the sentence
function decodeMessage(encodedText) {
    const words = encodedText.split(' ');
    let binary = '';

    words.forEach((word, index) => {
        const wordPair = wordMap[index % wordMap.length];
        binary += word === wordPair.zero ? '0' : '1';
    });

    return binaryToString(binary);
}

// Event listeners
document.getElementById('encodeButton').addEventListener('click', () => {
    const secretMessage = document.getElementById('hiddenMessage').value.trim();
    if (!secretMessage) {
        alert('Please enter a secret message.');
        return;
    }

    const encodedText = encodeMessage(secretMessage);
    document.getElementById('encodedText').value = encodedText;
});

document.getElementById('decodeButton').addEventListener('click', () => {
    const encodedText = document.getElementById('encodedText').value.trim();
    if (!encodedText) {
        alert('Please enter an encoded message.');
        return;
    }

    const decodedMessage = decodeMessage(encodedText);
    document.getElementById('decodedText').value = decodedMessage;
});
