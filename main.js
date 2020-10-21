// list of possible answers
const answers = [["It is certain.", "It is decidedly so.", "Without a doubt!", "Yes - definitely!", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good!", "Yes!", "Signs point to yes."], ["Reply hazy, try again...", "Ask again later...", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again!"], ["Don't count on it!", "My reply is no!", "My sources say no.", "Outlook not so good.", "Very doubtful..."]];

// fetching elements
let answerField = document.getElementById("answerfield");
let button = document.getElementById("check");
let questionField = document.getElementById("question");

// function to displaying an answer
const displayAnswer = () => {
    if (questionField.value.length <= 0) {
        answerField.innerHTML = "I can fortell the future but I cannot read your mind, please ask your question...";
        questionField.focus();
    } else if (questionField.value.length <= 7) {
        answerField.innerHTML = "Please be more specific, unless you don't really want to know the answer?";
        questionField.value = "";
        questionField.focus();    
    } else {
        var num1 = Math.floor(Math.random() * answers.length);
        var num2 = Math.floor(Math.random() * answers[num1].length);
        answerField.innerHTML = answers[num1][num2];
        questionField.value = "";
        questionField.focus();
    }
}
// button function
button.onmouseup = displayAnswer;

// questionField.addEventListener("keydown", displayAnswer);