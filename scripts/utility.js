function elementHiddenById(elementId) {
  const elment = document.getElementById(elementId);
  elment.classList.add("hidden");
}

function elementShowById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// sore and life field function

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const value = parseInt(element.innerText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// random alphabets functon
function randomAlphabet(alphabetId) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * alphabet.length);

  const randomText = document.getElementById("random-text");
  const random = (randomText.innerText = alphabet[randomIndex].toUpperCase());
  return random;
}

// keyboard text function

function highlightBackground(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-200");
}
function removedHighlightBackground(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-200");
}
