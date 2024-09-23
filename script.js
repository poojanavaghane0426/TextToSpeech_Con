let speech = new SpeechSynthesisUtterance();
//for adding voices
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    //provide all the voice present in device
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];//bydefault 1st voice played

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)))
};

//change the speech value 
voiceSelect.addEventListener("change",() => {
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});