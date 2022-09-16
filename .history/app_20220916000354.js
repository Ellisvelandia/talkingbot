
alert ("This is an alert dialog box");  

const button = document.queryselector("button");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onStart = function () {
  console.log("Speech Recognition started!");
};

recognition.onresult = function (event) {
  console.log(event);
};

button.addEventListener("click", () => {
  recognition.onStart();
});
