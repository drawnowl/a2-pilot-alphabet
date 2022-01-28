import { icaoAlphabet } from "../scripts/icaoAlphabet.js";

const translateBtn = document.getElementById('translateBtn');
const inputValue   = document.getElementById('inputValue');
const resultOutput = document.getElementById('result');

function translate(value) {
  let inputParsedArray = [...value].filter((index) => index !== ',');

  console.log(inputParsedArray)
  let result = '';

  for (let i = 0; i < inputParsedArray.length; i++) {
    let charCode = (inputParsedArray[i] + '').toUpperCase().charCodeAt();
    result += icaoAlphabet[charCode] + ' ';
  }

  return result;
}

function printResult() {
  resultOutput.innerHTML = translate(inputValue.value);
};

translateBtn.addEventListener('click', printResult);
