const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

// Encode to UTF-16 function
// Take the string value in and split it to pass to the charCodeAt() method
const encodeMe = (encodeString) => {
  const stringArray = encodeString.split('');
  let encodedArray = [];
  stringArray.forEach((letter) => {
    encodedArray.push(letter.charCodeAt());
  });
  return encodedArray;
};

// Decode from UTF-16 function
// Take Array and decode then put back together
const decodeMe = (decodeString) => {
  const stringArray = decodeString.split(',');
  console.log(stringArray);
  let decodedString = '';
  decodedString = String.fromCharCode(stringArray);
  console.log('Test', decodedString);
  // :( So close...
  //   stringArray.forEach((letter) => {
  //     decodedString.concat(String.fromCharCode(letter));
  //     // decodedArray.join(String.fromCharCode(letter));
  //   });
  return decodedString;
};

// Get reference to encode button for event
// Create click event listener and send to encode function
const encodeButton = document.querySelector('#encode-btn');
encodeButton.addEventListener('click', (event) => {
  const userInput = document.querySelector('#encode-input');
  const encodedString = encodeMe(userInput.value);

  printToDom(encodedString, 'encode-output');
});

// Get reference to decode button for event
// Create click event listener and send to decode fucntion
const decodeButton = document.querySelector('#decode-btn');
decodeButton.addEventListener('click', (event) => {
  const userInput = document.querySelector('#decode-input');
  const decodeString = decodeMe(userInput.value);

  printToDom(decodeString, 'decode-output');
});
