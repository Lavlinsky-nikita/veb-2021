var alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
function shiftAlphabet(shift) {
    var shiftedAlphabet = ''; //новый алфавит 
    for (var i = 0; i < alphabet.length; i++) {
        currentLetter = (alphabet[i + shift] === undefined) ? (alphabet[i + shift - alphabet.length]) : (alphabet[i + shift]);
        shiftedAlphabet = shiftedAlphabet.concat(currentLetter);
    }
    return shiftedAlphabet;
}
function cesar(string, shift, action) {
    var shiftedAlphabet = shiftAlphabet(shift);
    var encryptedMessage = '';
    if (action == 'encode') {
        for (var i = 0; i < string.length; i++) {
            if (string[i] == ' ') {
                encryptedMessage = encryptedMessage.concat(' ');
                continue
            }
            var indexOfLetter = alphabet.indexOf(string[i].toUpperCase());
            encryptedMessage = encryptedMessage.concat(shiftedAlphabet[indexOfLetter]);
        }
        return encryptedMessage.toLowerCase();
    }
    if (action == 'decode') {
        for (var i = 0; i < string.length; i++) {
            if (string[i] == ' ') {
                encryptedMessage = encryptedMessage.concat(' ');
                continue
            }
            var indexOfLetter = shiftedAlphabet.indexOf(string[i].toUpperCase());
            encryptedMessage = encryptedMessage.concat(alphabet[indexOfLetter]);
        }
        return encryptedMessage.toLowerCase();
    }
}

const load = () => {
    console.log(cesar('хакуна матата', 8, 'encode'))
    console.log(cesar('эзтыхз фзъзъз', 8, 'decode'));
    // хакуна матата
}
window.onload = load()

