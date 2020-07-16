const stemmer = new Snowball('English');
stemmer.setCurrent('abbreviations');
stemmer.stem();
console.log(stemmer.getCurrent());

Corpus_1 = `A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.`;
Corpus_2 = `A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.`;
Corpus_3 = `A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.`;

document.getElementById("instructText").style.visibility = "hidden";
document.getElementById("table").style.visibility = "hidden";
document.getElementById("continue").style.visibility = "hidden";
document.getElementById("message").style.visibility = "hidden";

Corpus_1 = Corpus_1.replace(/[^\w\s]|/g, "");
Corpus_2 = Corpus_2.replace(/[^\w\s]|/g, "");
Corpus_3 = Corpus_3.replace(/[^\w\s]|/g, "");

var lower1 = Corpus_1.toLowerCase();
var paragraph_1 = lower1.split(" ");
var lower2 = Corpus_2.toLowerCase();
var paragraph_2 = lower2.split(" ");
var lower3 = Corpus_3.toLowerCase();
var paragraph_3 = lower3.split(" ");
var corpusTokens1 = paragraph_1.length;
var corpusTokens2 = paragraph_2.length;
var corpusTokens3 = paragraph_3.length;

function countTypes(arr) {
    var a = [];
    for (var i = 0, l = arr.length; i < l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    return a.length;
}
var corpusType1 = countTypes(paragraph_1);
var corpusType2 = countTypes(paragraph_2);
var corpusType3 = countTypes(paragraph_3);

function corpus() {
    var displayCorpus = document.getElementById("corpusSelection").value;
    var corpusDetails = "";
    if (displayCorpus == 'passage1') {
        corpusDetails = Corpus_1;
        document.getElementById("submitButton").innerHTML = '<button onclick="submit(corpusTokens1,corpusType1)">Submit</button>';
    }
    if (displayCorpus == 'passage2') {
        corpusDetails = Corpus_2;
        document.getElementById("submitButton").innerHTML = `<button onclick="submit(corpusTokens2,corpusType2)">Submit</button>`;
    }
    if (displayCorpus == 'passage3') {
        corpusDetails = Corpus_3;
        document.getElementById("submitButton").innerHTML = `<button onclick="submit(corpusTokens3,corpusType3)">Submit</button>`;
    }
    document.getElementById("displayCorpus").innerHTML = corpusDetails;
    document.getElementById("instructText").style.visibility = "visible";
    document.getElementById("table").style.visibility = "visible";
}
        

function submit(inputToken,inputType) {
    var token = document.getElementById("tokens").value;
    var type = document.getElementById("types").value;
    console.log(inputToken);
    console.log(inputType);
    if (inputToken == token && inputType == type) {
        document.getElementById('answer').innerHTML = "Right answer!";
        document.getElementById('answer').style.color = "green";
        document.getElementById('tokens').style.backgroundColor = "green";
        document.getElementById('types').style.backgroundColor = "green";
        document.getElementById("continue").style.visibility = "visible";
    }
    if (inputToken != token && inputType == type) {
        document.getElementById('answer').innerHTML = "Wrong answer!";
        document.getElementById('answer').style.color = "red";
        document.getElementById('tokens').style.backgroundColor = "red";
        document.getElementById('types').style.backgroundColor = "green";
    }
    if (inputToken == token && inputType != type) {
        document.getElementById('answer').innerHTML = "Wrong answer!";
        document.getElementById('answer').style.color = "red";
        document.getElementById('tokens').style.backgroundColor = "green";
        document.getElementById('types').style.backgroundColor = "red";
    }
    if (inputToken != token && inputType != type) {
        document.getElementById('answer').innerHTML = "Wrong answer!";
        document.getElementById('answer').style.color = "red";
        document.getElementById('tokens').style.backgroundColor = "red";
        document.getElementById('types').style.backgroundColor = "red";
    }
}
function continueFunction() {
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementById("message").style.visibility = "visible";
    document.getElementById('message').innerHTML= "<p>Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types</p>";
    document.getElementById('continue').innerHTML = "#New types:";
    document.getElementById('newInput').innerHTML = "<input id='newTypes' type=text size='4'>";
}