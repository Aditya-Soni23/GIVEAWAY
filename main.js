function jij(){
    window.location = "giveaway.html";
}



function xxx(){
    window.location = "process.html";
}



function ppp(){
    window.location = "thankyou.html";
}









var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var textbox= document.getElementById("textbox");

function st(){

    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}

    function speak(){
        var synth= window.speechSynthesis;
    
    
        speak_data = "Ok, now click on the button process. To send your gifts to your free fire account";
    
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }
    



