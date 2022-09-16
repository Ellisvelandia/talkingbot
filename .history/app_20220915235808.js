const button = document.queryselector('button');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onStart = function () {
  console.log
}

button.addEventListener("click", () => {

})