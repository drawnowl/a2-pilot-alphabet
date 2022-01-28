const icaoAlphabet = {
  "48": "zero",
  "49": "one",
  "50": "two",
  "51": "three",
  "52": "four",
  "53": "five",
  "54": "six",
  "55": "seven",
  "56": "eight",
  "57": "nine",
  "65": "Alfa",
  "66": "Bravo",
  "67": "Charlie",
  "68": "Delta",
  "69": "Echo",
  "70": "Foxtrot",
  "71": "Golf",
  "72": "Hotel",
  "73": "India",
  "74": "Juliett",
  "75": "Kilo",
  "76": "Lima",
  "77": "Mike​",
  "78": "November",
  "79": "Oscar",
  "80": "Papa",
  "81": "Quebec",
  "82": "Romeo",
  "83": "Sierra",
  "84": "Tango",
  "85": "Uniform",
  "86": "Victor",
  "87": "Whiskey",
  "88": "X-ray",
  "89": "Yankee",
  "90": "Zulu"
}

const inputValue = '404fd3';
let inputParsedArray = [...inputValue].filter((index) => index !== ',');
let result = '';

for (let i = 0; i <= inputParsedArray.length; i++) {
  let charCode = (inputParsedArray[i] + '').toUpperCase().charCodeAt();
  result += icaoAlphabet[charCode] + ' ';
}

console.log(result);
