const button = document.querySelector("button");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Speech Recognition started!");
};

recognition.onresult = function (event) {
  console.log(event);

  const spokenwords = event.results[0][0].transcript;

  console.log("spoken words are", spokenwords);
  computerSpeech(spokenwords);
};

function compu(params) {
  
}

button.addEventListener("click", () => {
  recognition.start();
});
