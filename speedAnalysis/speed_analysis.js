let testText = [
    "The cow jumped over the moon after eating cheese.",
    "The quick brown fox jumps over the lazy dog.",
    "The chicken had two eggs and a barbeque."
];
let startTime, endTime;

function startTest(){
    let randomText = Math.floor(Math.random() * 3);
    
    document.getElementById("inputText").value = testText[randomText];

    document.getElementById("output").innerHTML = ""
    startTime = new Date().getTime();
    // console.log("st: ",startTime)

    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest(){
    // should compare test text

    endTime = new Date().getTime();
    // console.log("et: ", endTime)

    document.getElementById("userInput").readOnly = true;

    var timeElapsed = (endTime - startTime) / 1000;
    // console.log("te: ", timeElapsed)
    var userTypedText = document.getElementById("userInput").value;

    var typedWords = userTypedText.split(/\s+/).filter(function (word){
        return word !== "";
    }).length;

    var wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
    <h2>Typing Test Results:</h2>
    <p>Words Typed: ${typedWords} </p>
    <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds </p>
    <p>Words Per Minute (WPM): ${wpm}</p>
    `;

    document.getElementById("userInput").value = ""
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}
