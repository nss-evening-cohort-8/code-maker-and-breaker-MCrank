const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

// Encode to UTF-16 function
// Take the string value in and split it to pass to the charCodeAt() method
const encodeMe = (stringValue) => {
  const stringArray = stringValue.split('');
  let encodedArray = [];
  stringArray.forEach((letter) => {
    encodedArray.push(letter.charCodeAt());
  });
  return encodedArray;
};

// Get reference to encode button for event
// Create click event listener and send to encode function
const encodeButton = document.querySelector('#encode-btn');
encodeButton.addEventListener('click', (event) => {
  const userInput = document.querySelector('#encode-input');
  const encodedString = encodeMe(userInput.value);

  printToDom(encodedString, 'encode-output');
});
