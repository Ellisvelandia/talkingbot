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

function computerSpeech(words) {
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-us";
  speech.pitch = 0.9;
  speech.volume = 1;
  speech.rate = 1;

  determineWords(speech, words);

  window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
  if (words.includes("How are you")) {
    speech.text = "I am fine , thank you!";
  }
  if (words.includes("Who I am")) {
    speech.text = "You are my master!";
  }
  if (words.includes("How is the weather")) {
    speech.text = "why you care about that? you never go out!";
  }
  if (words.includes("Do you love me")) {
    speech.text = "why should i love you? you are a loser!";
  }
  if (words.includes("Open YouTube for me")) {
    speech.text = "Opening youtube for my master now!";
    window.open("https://www.youtube.com/");
  }
}

button.addEventListener("click", () => {
  recognition.start();
});
