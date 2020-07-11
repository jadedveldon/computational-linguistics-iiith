var sentanceEnglish = [
    ['John', 'ate', 'an', 'apple', 'before', 'afternoon'],
    ['some', 'students', 'like', 'to', 'study', 'at', 'night'],
    ['John', 'and', 'Mary', 'went', 'to', 'church'],
    ['John', 'went', 'to', 'church', 'after', 'eating'],
    ['did', 'he', 'go', 'to', 'market'],
    ['the', 'woman', 'who', 'called', 'my', 'sister', 'sells', 'cosmetics'],
    ['John', 'goes', 'to', 'the', 'library', 'and', 'studies'],
    ['John', 'ate', 'an', 'apple', 'so', 'did', 'she'],
    ['the', 'teacher', 'returned', 'the', 'book', 'after', 'she', 'noticed', 'the', 'error'],
    ['I', 'told', 'her', 'that', 'I', 'bought', 'a', 'book', 'yesterday']
];
var e11 = [sentanceEnglish[0][0], sentanceEnglish[0][1], sentanceEnglish[0][2], sentanceEnglish[0][3], sentanceEnglish[0][4], sentanceEnglish[0][5]];
var e12 = [sentanceEnglish[0][4], sentanceEnglish[0][5], sentanceEnglish[0][0], sentanceEnglish[0][1], sentanceEnglish[0][2], sentanceEnglish[0][3]];
var e13 = [sentanceEnglish[0][0], sentanceEnglish[0][4], sentanceEnglish[0][5], sentanceEnglish[0][1], sentanceEnglish[0][2], sentanceEnglish[0][3]];
var e21 = [sentanceEnglish[1][0], sentanceEnglish[1][1], sentanceEnglish[1][2], sentanceEnglish[1][3], sentanceEnglish[1][4], sentanceEnglish[1][5], sentanceEnglish[1][6]];
var e22 = [sentanceEnglish[1][5], sentanceEnglish[1][6], sentanceEnglish[1][0], sentanceEnglish[1][1], sentanceEnglish[1][2], sentanceEnglish[1][3], sentanceEnglish[1][4]];
var e31 = [sentanceEnglish[2][0], sentanceEnglish[2][1], sentanceEnglish[2][2], sentanceEnglish[2][3], sentanceEnglish[2][4], sentanceEnglish[2][5]];
var e32 = [sentanceEnglish[2][2], sentanceEnglish[2][1], sentanceEnglish[2][0], sentanceEnglish[2][3], sentanceEnglish[2][4], sentanceEnglish[2][5]];
var e41 = [sentanceEnglish[3][0], sentanceEnglish[3][1], sentanceEnglish[3][2], sentanceEnglish[3][3], sentanceEnglish[3][4], sentanceEnglish[3][5]];
var e42 = [sentanceEnglish[3][4], sentanceEnglish[3][5], sentanceEnglish[3][0], sentanceEnglish[3][1], sentanceEnglish[3][2], sentanceEnglish[3][3]];
var e43 = [sentanceEnglish[3][0], sentanceEnglish[3][4], sentanceEnglish[3][5], sentanceEnglish[3][1], sentanceEnglish[3][2], sentanceEnglish[3][3]];
var e51 = [sentanceEnglish[4][0], sentanceEnglish[4][1], sentanceEnglish[4][2], sentanceEnglish[4][3], sentanceEnglish[4][4]];
var e52 = [sentanceEnglish[4][1], sentanceEnglish[4][0], sentanceEnglish[4][2], sentanceEnglish[4][3], sentanceEnglish[4][4]];
var e61 = [sentanceEnglish[5][0], sentanceEnglish[5][1], sentanceEnglish[5][2], sentanceEnglish[5][3], sentanceEnglish[5][4], sentanceEnglish[5][5], sentanceEnglish[5][6], sentanceEnglish[5][7]];
var e62 = [sentanceEnglish[5][0], sentanceEnglish[5][1], sentanceEnglish[5][2], sentanceEnglish[5][6], sentanceEnglish[5][7], sentanceEnglish[5][3], sentanceEnglish[5][4], sentanceEnglish[5][5]];
var e63 = [sentanceEnglish[5][4], sentanceEnglish[5][5], sentanceEnglish[5][2], sentanceEnglish[5][6], sentanceEnglish[5][7], sentanceEnglish[5][3], sentanceEnglish[5][0], sentanceEnglish[5][1]];
var e64 = [sentanceEnglish[5][4], sentanceEnglish[5][5], sentanceEnglish[5][2], sentanceEnglish[5][3], sentanceEnglish[5][0], sentanceEnglish[5][1], sentanceEnglish[5][6], sentanceEnglish[5][7]];
var e71 = [sentanceEnglish[6][0], sentanceEnglish[6][1], sentanceEnglish[6][2], sentanceEnglish[6][3], sentanceEnglish[6][4], sentanceEnglish[6][5], sentanceEnglish[6][6]];
var e72 = [sentanceEnglish[6][0], sentanceEnglish[6][6], sentanceEnglish[6][5], sentanceEnglish[6][1], sentanceEnglish[6][2], sentanceEnglish[6][3], sentanceEnglish[6][4]];
var e81 = [sentanceEnglish[7][0], sentanceEnglish[7][1], sentanceEnglish[7][2], sentanceEnglish[7][3], sentanceEnglish[7][4], sentanceEnglish[7][5], sentanceEnglish[7][6]];
var e82 = [sentanceEnglish[7][6], sentanceEnglish[7][1], sentanceEnglish[7][2], sentanceEnglish[7][3], sentanceEnglish[7][4], sentanceEnglish[7][5], sentanceEnglish[7][0]];
var e91 = [sentanceEnglish[8][0], sentanceEnglish[8][1], sentanceEnglish[8][2], sentanceEnglish[8][3], sentanceEnglish[8][4], sentanceEnglish[8][5], sentanceEnglish[8][6], sentanceEnglish[8][7], sentanceEnglish[8][8], sentanceEnglish[8][9]];
var e92 = [sentanceEnglish[8][0], sentanceEnglish[8][1], sentanceEnglish[8][7], sentanceEnglish[8][8], sentanceEnglish[8][9], sentanceEnglish[8][5], sentanceEnglish[8][6], sentanceEnglish[8][2], sentanceEnglish[8][3], sentanceEnglish[8][4]];
var e93 = [sentanceEnglish[8][5], sentanceEnglish[8][0], sentanceEnglish[8][1], sentanceEnglish[8][2], sentanceEnglish[8][3], sentanceEnglish[8][4], sentanceEnglish[8][6], sentanceEnglish[8][7], sentanceEnglish[8][8], sentanceEnglish[8][9]];
var e94 = [sentanceEnglish[8][5], sentanceEnglish[8][0], sentanceEnglish[8][1], sentanceEnglish[8][7], sentanceEnglish[8][8], sentanceEnglish[8][9], sentanceEnglish[8][6], sentanceEnglish[8][2], sentanceEnglish[8][3], sentanceEnglish[8][4]];
var e95 = [sentanceEnglish[8][6], sentanceEnglish[8][2], sentanceEnglish[8][3], sentanceEnglish[8][4], sentanceEnglish[8][5], sentanceEnglish[8][0], sentanceEnglish[8][1], sentanceEnglish[8][7], sentanceEnglish[8][8], sentanceEnglish[8][9]];
var e96 = [sentanceEnglish[8][6], sentanceEnglish[8][7], sentanceEnglish[8][8], sentanceEnglish[8][9], sentanceEnglish[8][5], sentanceEnglish[8][0], sentanceEnglish[8][1], sentanceEnglish[8][2], sentanceEnglish[8][3], sentanceEnglish[8][4]];
var e97 = [sentanceEnglish[8][5], sentanceEnglish[8][6], sentanceEnglish[8][2], sentanceEnglish[8][3], sentanceEnglish[8][4], sentanceEnglish[8][0], sentanceEnglish[8][1], sentanceEnglish[8][7], sentanceEnglish[8][8], sentanceEnglish[8][9]];
var e98 = [sentanceEnglish[8][5], sentanceEnglish[8][6], sentanceEnglish[8][7], sentanceEnglish[8][8], sentanceEnglish[8][9], sentanceEnglish[8][0], sentanceEnglish[8][1], sentanceEnglish[8][2], sentanceEnglish[8][3], sentanceEnglish[8][4]];
var e101 = [sentanceEnglish[9][0], sentanceEnglish[9][1], sentanceEnglish[9][2], sentanceEnglish[9][3], sentanceEnglish[9][4], sentanceEnglish[9][5], sentanceEnglish[9][6], sentanceEnglish[9][7], sentanceEnglish[9][8]];
var e102 = [sentanceEnglish[9][0], sentanceEnglish[9][1], sentanceEnglish[9][2], sentanceEnglish[9][8], sentanceEnglish[9][3], sentanceEnglish[9][4], sentanceEnglish[9][5], sentanceEnglish[9][6], sentanceEnglish[9][7]];
var e103 = [sentanceEnglish[9][8], sentanceEnglish[9][0], sentanceEnglish[9][1], sentanceEnglish[9][2], sentanceEnglish[9][3], sentanceEnglish[9][4], sentanceEnglish[9][5], sentanceEnglish[9][6], sentanceEnglish[9][7]];
var e104 = [sentanceEnglish[9][4], sentanceEnglish[9][5], sentanceEnglish[9][6], sentanceEnglish[9][7], sentanceEnglish[9][3], sentanceEnglish[9][0], sentanceEnglish[9][1], sentanceEnglish[9][2], sentanceEnglish[9][8]];
var e105 = [sentanceEnglish[9][4], sentanceEnglish[9][5], sentanceEnglish[9][6], sentanceEnglish[9][7], sentanceEnglish[9][8], sentanceEnglish[9][3], sentanceEnglish[9][0], sentanceEnglish[9][1], sentanceEnglish[9][2]];
var e106 = [sentanceEnglish[9][8], sentanceEnglish[9][4], sentanceEnglish[9][5], sentanceEnglish[9][6], sentanceEnglish[9][7], sentanceEnglish[9][3], sentanceEnglish[9][0], sentanceEnglish[9][1], sentanceEnglish[9][2]];

var sentanceHindi = [
    ['राम', 'और', 'श्याम', 'बाजार', 'गयें'],
    ['राम', 'सोया', 'और', 'श्याम', 'भी'],
    ['मैंने', 'उसे', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'],
    ['राम', 'खाकर', 'सोया'],
    ['बिल्लियों', 'को', 'मारकर', 'कुत्ता', 'सो', 'गया'],
    ['एक', 'लाल', 'किताब', 'वहाँ', 'है'],
    ['एक', 'बड़ी', 'सी', 'किताब', 'वहाँ', 'है']
];
var h11 = [sentanceHindi[0][0], sentanceHindi[0][1], sentanceHindi[0][2], sentanceHindi[0][3], sentanceHindi[0][4]];
var h12 = [sentanceHindi[0][0], sentanceHindi[0][1], sentanceHindi[0][2], sentanceHindi[0][4], sentanceHindi[0][3]];
var h13 = [sentanceHindi[0][3], sentanceHindi[0][4], sentanceHindi[0][0], sentanceHindi[0][1], sentanceHindi[0][2]];
var h14 = [sentanceHindi[0][4], sentanceHindi[0][3], sentanceHindi[0][0], sentanceHindi[0][1], sentanceHindi[0][2]];
var h21 = [sentanceHindi[1][0], sentanceHindi[1][1], sentanceHindi[1][2], sentanceHindi[1][3], sentanceHindi[1][4]];
var h22 = [sentanceHindi[1][3], sentanceHindi[1][1], sentanceHindi[1][2], sentanceHindi[1][0], sentanceHindi[1][4]];
var h23 = [sentanceHindi[1][1], sentanceHindi[1][0], sentanceHindi[1][2], sentanceHindi[1][3], sentanceHindi[1][4]];
var h24 = [sentanceHindi[1][1], sentanceHindi[1][3], sentanceHindi[1][2], sentanceHindi[1][0], sentanceHindi[1][4]];
var h31 = [sentanceHindi[2][0], sentanceHindi[2][1], sentanceHindi[2][2], sentanceHindi[2][3], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6], sentanceHindi[2][7]];
var h32 = [sentanceHindi[2][0], sentanceHindi[2][1], sentanceHindi[2][2], sentanceHindi[2][3], sentanceHindi[2][7], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6]];
var h33 = [sentanceHindi[2][1], sentanceHindi[2][0], sentanceHindi[2][2], sentanceHindi[2][3], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6], sentanceHindi[2][7]];
var h34 = [sentanceHindi[2][1], sentanceHindi[2][0], sentanceHindi[2][2], sentanceHindi[2][3], sentanceHindi[2][7], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6]];
var h35 = [sentanceHindi[2][0], sentanceHindi[2][2], sentanceHindi[2][1], sentanceHindi[2][3], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6], sentanceHindi[2][7]];
var h36 = [sentanceHindi[2][0], sentanceHindi[2][2], sentanceHindi[2][1], sentanceHindi[2][3], sentanceHindi[2][7], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6]];
var h37 = [sentanceHindi[2][1], sentanceHindi[2][2], sentanceHindi[2][0], sentanceHindi[2][3], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6], sentanceHindi[2][7]];
var h38 = [sentanceHindi[2][1], sentanceHindi[2][2], sentanceHindi[2][0], sentanceHindi[2][3], sentanceHindi[2][7], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6]];
var h39 = [sentanceHindi[2][2], sentanceHindi[2][0], sentanceHindi[2][1], sentanceHindi[2][3], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6], sentanceHindi[2][7]];
var h310 = [sentanceHindi[2][2], sentanceHindi[2][0], sentanceHindi[2][1], sentanceHindi[2][3], sentanceHindi[2][7], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6]];
var h311 = [sentanceHindi[2][2], sentanceHindi[2][1], sentanceHindi[2][0], sentanceHindi[2][3], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6], sentanceHindi[2][7]];
var h312 = [sentanceHindi[2][2], sentanceHindi[2][1], sentanceHindi[2][0], sentanceHindi[2][3], sentanceHindi[2][7], sentanceHindi[2][4], sentanceHindi[2][5], sentanceHindi[2][6]];
var h41 = [sentanceHindi[3][0], sentanceHindi[3][1], sentanceHindi[3][2]];
var h42 = [sentanceHindi[3][0], sentanceHindi[3][2], sentanceHindi[3][1]];
var h43 = [sentanceHindi[3][1], sentanceHindi[3][0], sentanceHindi[3][2]];
var h44 = [sentanceHindi[3][1], sentanceHindi[3][2], sentanceHindi[3][0]];
var h45 = [sentanceHindi[3][2], sentanceHindi[3][1], sentanceHindi[3][0]];
var h46 = [sentanceHindi[3][2], sentanceHindi[3][0], sentanceHindi[3][1]];
var h51 = [sentanceHindi[4][0], sentanceHindi[4][1], sentanceHindi[4][2], sentanceHindi[4][3], sentanceHindi[4][4], sentanceHindi[4][5]];
var h52 = [sentanceHindi[4][2], sentanceHindi[4][0], sentanceHindi[4][1], sentanceHindi[4][3], sentanceHindi[4][4], sentanceHindi[4][5]];
var h53 = [sentanceHindi[4][0], sentanceHindi[4][1], sentanceHindi[4][2], sentanceHindi[4][4], sentanceHindi[4][5], sentanceHindi[4][3]];
var h54 = [sentanceHindi[4][2], sentanceHindi[4][0], sentanceHindi[4][1], sentanceHindi[4][4], sentanceHindi[4][5], sentanceHindi[4][3]];
var h55 = [sentanceHindi[4][3], sentanceHindi[4][5], sentanceHindi[4][4], sentanceHindi[4][0], sentanceHindi[4][1], sentanceHindi[4][2]];
var h56 = [sentanceHindi[4][3], sentanceHindi[4][5], sentanceHindi[4][4], sentanceHindi[4][2], sentanceHindi[4][1], sentanceHindi[4][0]];
var h57 = [sentanceHindi[4][4], sentanceHindi[4][3], sentanceHindi[4][5], sentanceHindi[4][0], sentanceHindi[4][1], sentanceHindi[4][2]];
var h58 = [sentanceHindi[4][4], sentanceHindi[4][3], sentanceHindi[4][5], sentanceHindi[4][2], sentanceHindi[4][1], sentanceHindi[4][0]];
var h61 = [sentanceHindi[5][0], sentanceHindi[5][1], sentanceHindi[5][2], sentanceHindi[5][3], sentanceHindi[5][4]];
var h62 = [sentanceHindi[5][0], sentanceHindi[5][1], sentanceHindi[5][2], sentanceHindi[5][4], sentanceHindi[5][3]];
var h63 = [sentanceHindi[5][3], sentanceHindi[5][4], sentanceHindi[5][0], sentanceHindi[5][1], sentanceHindi[5][2]];
var h64 = [sentanceHindi[5][4], sentanceHindi[5][3], sentanceHindi[5][0], sentanceHindi[5][1], sentanceHindi[5][2]];
var h71 = [sentanceHindi[6][0], sentanceHindi[6][1], sentanceHindi[6][2], sentanceHindi[6][3], sentanceHindi[6][4], sentanceHindi[6][5]];
var h72 = [sentanceHindi[6][0], sentanceHindi[6][1], sentanceHindi[6][2], sentanceHindi[6][3], sentanceHindi[6][5], sentanceHindi[6][4]];
var h73 = [sentanceHindi[6][2], sentanceHindi[6][0], sentanceHindi[6][1], sentanceHindi[6][3], sentanceHindi[6][4], sentanceHindi[6][5]];
var h74 = [sentanceHindi[6][2], sentanceHindi[6][0], sentanceHindi[6][1], sentanceHindi[6][3], sentanceHindi[6][5], sentanceHindi[6][4]];
var h75 = [sentanceHindi[6][4], sentanceHindi[6][5], sentanceHindi[6][0], sentanceHindi[6][1], sentanceHindi[6][2], sentanceHindi[6][3]];
var h76 = [sentanceHindi[6][4], sentanceHindi[6][5], sentanceHindi[6][1], sentanceHindi[6][0], sentanceHindi[6][0], sentanceHindi[6][3]];
var h77 = [sentanceHindi[6][5], sentanceHindi[6][4], sentanceHindi[6][0], sentanceHindi[6][1], sentanceHindi[6][2], sentanceHindi[6][3]];
var h78 = [sentanceHindi[6][5], sentanceHindi[6][4], sentanceHindi[6][1], sentanceHindi[6][0], sentanceHindi[6][0], sentanceHindi[6][3]];

document.getElementById("reformSentance").style.visibility = "hidden";
document.getElementById("formedSentance").style.visibility = "hidden";
document.getElementById("checkButton").style.visibility = "hidden";
document.getElementById("rightAnswer").style.visibility = "hidden";
document.getElementById("wrongAnswer").style.visibility = "hidden";
document.getElementById("getSentButton").style.visibility = "hidden";
document.getElementById("answersToggle").style.visibility = "hidden";
document.getElementById("answersToggle2").style.visibility = "hidden";
document.getElementById("InputDiv").style.visibility = "hidden";

var inputArray=[];
var randomize;
var flagEng = 0;
var flagHin = 0;
function selectOptions() {
    var selection = document.getElementById("select").value;
    var text = "";
    if(selection == 'english' ){
        text = "<b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b><br><i>(select the buttons in proper order)</i>";
        randomEnglish();
    }
    else if (selection == 'hindi' ){
        text = "<b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b><br><i>(select the buttons in proper order)</i>";
        randomHindi();
    }
    else {
        alert("Select language");
    }
    document.getElementById("message").innerHTML = text;
}
var hinIndex;
var engIndex;
function randomEnglish() {
    inputArray = [];
    hinIndex = 'null';
    document.getElementById("randomButtons").innerHTML = "";
    flagEng++;
    engIndex = Math.floor(Math.random() * sentanceEnglish.length);
    var sentance = sentanceEnglish[engIndex];
    randomize = randomizeWords(sentance);
    for (var i = 0; i < randomize.length; i++) {
        document.getElementById("randomButtons").innerHTML += "<button class='btn btn-dark buttongap' id= '" + i + "' onclick='clicker("+i+")'>" + randomize[i] + "</button>";
    }
}
function randomHindi() {
    inputArray = [];
    engIndex = 'null';
    document.getElementById("randomButtons").innerHTML = "";
    flagHin++;
    hinIndex = Math.floor(Math.random() * sentanceHindi.length);
    var sentance = sentanceHindi[hinIndex];
    randomize = randomizeWords(sentance);
    for (var i = 0; i < randomize.length; i++) {
        document.getElementById("randomButtons").innerHTML += "<button class='btn btn-dark buttongap' id= '" + i + "' onclick='clicker(" + i + ")'>" + randomize[i] + "</button>";
    }
}
function randomizeWords(innerArray) {
    var length = innerArray.length;
    var temp, index;
    while (length > 0) {
        index = Math.floor(Math.random() * length);
        length--;
        temp = innerArray[length];
        innerArray[length] = innerArray[index];
        innerArray[index] = temp;
    }
    return innerArray;
}
function clicker(i) {
    document.getElementById("formedSentance").style.visibility = "visible";
    document.getElementById("reformSentance").style.visibility = "visible";
    document.getElementById("InputDiv").style.visibility = "visible";
    var buttonID = document.getElementById(i);
    buttonID.style.display = "none";
    inputArray.push(buttonID.textContent);
    var str = inputArray.join(' ');
    document.getElementById("inputSentance").innerHTML = str;
    if (inputArray.length == randomize.length) {
        document.getElementById("checkButton").style.visibility = "visible";
    }
}
function reform() {
    document.getElementById("reformSentance").style.visibility = "hidden";
    document.getElementById("formedSentance").style.visibility = "hidden";
    document.getElementById("InputDiv").style.visibility = "hidden";
    inputArray = [];
    document.getElementById("inputSentance").innerHTML = inputArray;
    document.getElementById("randomButtons").innerHTML = "";
    for (var i = 0; i < randomize.length; i++) {
        document.getElementById("randomButtons").innerHTML += "<button class='btn btn-dark buttongap' id= '" + i + "' onclick='clicker(" + i + ")'>" + randomize[i] + "</button>";
    }
    document.getElementById("rightAnswer").style.display = "block";
    document.getElementById("wrongAnswer").style.display = "block";
    document.getElementById("checkButton").style.visibility = "hidden";
    document.getElementById("rightAnswer").style.visibility = "hidden";
    document.getElementById("wrongAnswer").style.visibility = "hidden";
    document.getElementById("getSentButton").style.visibility = "hidden";
    engflag = 0;
    hinflag = 0;
    document.getElementById("a").innerHTML = "";
    document.getElementById("b").innerHTML = "";
    document.getElementById("c").innerHTML = "";
    document.getElementById("d").innerHTML = "";
    document.getElementById("e").innerHTML = "";
    document.getElementById("f").innerHTML = "";
    document.getElementById("g").innerHTML = "";
    document.getElementById("h").innerHTML = "";
    document.getElementById("i").innerHTML = "";
    document.getElementById("j").innerHTML = "";
    document.getElementById("k").innerHTML = "";
    document.getElementById("l").innerHTML = "";
    document.getElementById("answersToggle").style.display = "block";
    document.getElementById("answersToggle2").style.display = "block";
    document.getElementById("answersToggle").style.visibility = "hidden";
    document.getElementById("answersToggle2").style.visibility = "hidden";
    document.getElementById("getCorrect").style.display = "block";
}
function corpus() {
    var displayCorpus = document.getElementById("corpusSelection").value;
    var corpusDetails = "";
    if (displayCorpus == 'passage1') {
        corpusDetails = "A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, how shall I climb out?' Just then a rat came along, and he heard the mouse. 'Mouse', said the rat, 'if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."
    }
    if (displayCorpus == 'passage2') {
        corpusDetails = 'A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
    }
    if (displayCorpus == 'passage3') {
        corpusDetails = 'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'
    }
    document.getElementById("displayCorpus").innerHTML = corpusDetails;
}
var engflag = 0;
var hinflag = 0;
function checkerFunction() {
    if (flagEng > 0) {
        if (JSON.stringify(inputArray) == JSON.stringify(e11)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e12)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e13)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e21)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e22)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e31)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e32)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e41)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e42)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e43)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e51)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e52)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e61)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e62)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e63)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e64)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e71)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e72)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e81)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e82)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e91)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e92)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e93)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e94)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e95)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e96)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e97)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e98)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e101)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e102)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e103)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e104)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e105)) {
            engflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(e106)) {
            engflag++;
        }
    }
    if (flagHin > 0) {
        if (JSON.stringify(inputArray) == JSON.stringify(h11)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h12)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h13)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h14)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h21)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h22)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h23)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h24)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h31)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h32)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h33)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h34)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h35)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h36)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h37)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h38)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h39)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h310)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h311)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h312)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h41)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h42)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h43)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h44)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h45)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h46)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h51)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h52)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h53)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h54)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h55)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h56)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h57)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h58)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h61)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h62)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h63)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h64)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h71)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h72)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h73)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h74)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h75)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h76)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h77)) {
            hinflag++;
        }
        if (JSON.stringify(inputArray) == JSON.stringify(h78)) {
            hinflag++;
        }
    }
    if (engflag > 0 || hinflag > 0) {
        document.getElementById("rightAnswer").style.visibility = "visible";
        document.getElementById("wrongAnswer").style.display = "none";
        document.getElementById("rightAnswer").style.display = "block";
    }
    else {
        document.getElementById("getSentButton").style.visibility = "visible";
        document.getElementById("rightAnswer").style.display = "none";
        document.getElementById("wrongAnswer").style.visibility = "visible";
        document.getElementById("wrongAnswer").style.display = "block";
    }
}
function getCorrect() {
    var str;
    if (engIndex == 0) {
        str = e11.join(' ');
        document.getElementById("a").innerHTML = str;
        str = e12.join(' ');
        document.getElementById("b").innerHTML = str;
        str = e13.join(' ');
        document.getElementById("c").innerHTML = str;
    }
    if (engIndex == 1) {
        str = e21.join(' ');
        document.getElementById("a").innerHTML = str;
        str = e22.join(' ');
        document.getElementById("b").innerHTML = str;
    }
    if (engIndex == 2) {
        str = e31.join(' ');
        document.getElementById("a").innerHTML = str;
        str = e32.join(' ');
        document.getElementById("b").innerHTML = str;
    }
    if (engIndex == 3) {
        str = e41.join(' ');
        document.getElementById("a").innerHTML = str;
        str = e42.join(' ');
        document.getElementById("b").innerHTML = str;
        str = e43.join(' ');
        document.getElementById("c").innerHTML = str;
    }
    if (engIndex == 4) {
        str = e51.join(' ');
        document.getElementById("a").innerHTML = str;
        str = e52.join(' ');
        document.getElementById("b").innerHTML = str;
    }
    if (engIndex == 6) {
        str = e71.join(' ');
        document.getElementById("a").innerHTML = str;
        str = e72.join(' ');
        document.getElementById("b").innerHTML = str;
    }
    if (engIndex == 7) {
        str = e81.join(' ');
        document.getElementById("a").innerHTML = str;
        str = e82.join(' ');
        document.getElementById("b").innerHTML = str;
    }
    if (engIndex == 5) {
        str = e61.join(' ');
        document.getElementById("a").innerHTML = str;
        str = e62.join(' ');
        document.getElementById("b").innerHTML = str;
        str = e63.join(' ');
        document.getElementById("c").innerHTML = str;
        str = e64.join(' ');
        document.getElementById("d").innerHTML = str;
    }
    if (engIndex == 9) {
        str = e101.join(' ');
        document.getElementById("a").innerHTML = str;
        str = e102.join(' ');
        document.getElementById("b").innerHTML = str;
        str = e103.join(' ');
        document.getElementById("c").innerHTML = str;
        str = e104.join(' ');
        document.getElementById("d").innerHTML = str;
        str = e105.join(' ');
        document.getElementById("e").innerHTML = str;
        str = e106.join(' ');
        document.getElementById("f").innerHTML = str;
    }
    if (engIndex == 8) {
        str = e91.join(' ');
        document.getElementById("a").innerHTML = str;
        str = e92.join(' ');
        document.getElementById("b").innerHTML = str;
        str = e93.join(' ');
        document.getElementById("c").innerHTML = str;
        str = e94.join(' ');
        document.getElementById("d").innerHTML = str;
        str = e95.join(' ');
        document.getElementById("e").innerHTML = str;
        str = e96.join(' ');
        document.getElementById("f").innerHTML = str;
        str = e97.join(' ');
        document.getElementById("g").innerHTML = str;
        str = e98.join(' ');
        document.getElementById("h").innerHTML = str;
    }
    if (hinIndex == 4) {
        str = h41.join(' ');
        document.getElementById("a").innerHTML = str;
        str = h42.join(' ');
        document.getElementById("b").innerHTML = str;
        str = h43.join(' ');
        document.getElementById("c").innerHTML = str;
        str = h44.join(' ');
        document.getElementById("d").innerHTML = str;
        str = h45.join(' ');
        document.getElementById("e").innerHTML = str;
        str = h46.join(' ');
        document.getElementById("f").innerHTML = str;
    }
    if (hinIndex == 5) {
        str = h61.join(' ');
        document.getElementById("a").innerHTML = str;
        str = h62.join(' ');
        document.getElementById("b").innerHTML = str;
        str = h63.join(' ');
        document.getElementById("c").innerHTML = str;
        str = h64.join(' ');
        document.getElementById("d").innerHTML = str;
    }
    if (hinIndex == 0) {
        str = h11.join(' ');
        document.getElementById("a").innerHTML = str;
        str = h12.join(' ');
        document.getElementById("b").innerHTML = str;
        str = h13.join(' ');
        document.getElementById("c").innerHTML = str;
        str = h14.join(' ');
        document.getElementById("d").innerHTML = str;
    }
    if (hinIndex == 1) {
        str = h21.join(' ');
        document.getElementById("a").innerHTML = str;
        str = h22.join(' ');
        document.getElementById("b").innerHTML = str;
        str = h23.join(' ');
        document.getElementById("c").innerHTML = str;
        str = h24.join(' ');
        document.getElementById("d").innerHTML = str;
    }
    if (hinIndex == 4) {
        str = h51.join(' ');
        document.getElementById("a").innerHTML = str;
        str = h52.join(' ');
        document.getElementById("b").innerHTML = str;
        str = h53.join(' ');
        document.getElementById("c").innerHTML = str;
        str = h54.join(' ');
        document.getElementById("d").innerHTML = str;
        str = h55.join(' ');
        document.getElementById("e").innerHTML = str;
        str = h56.join(' ');
        document.getElementById("f").innerHTML = str;
        str = h57.join(' ');
        document.getElementById("g").innerHTML = str;
        str = h58.join(' ');
        document.getElementById("h").innerHTML = str;
    }
    if (hinIndex == 6) {
        str = h71.join(' ');
        document.getElementById("a").innerHTML = str;
        str = h72.join(' ');
        document.getElementById("b").innerHTML = str;
        str = h73.join(' ');
        document.getElementById("c").innerHTML = str;
        str = h74.join(' ');
        document.getElementById("d").innerHTML = str;
        str = h75.join(' ');
        document.getElementById("e").innerHTML = str;
        str = h76.join(' ');
        document.getElementById("f").innerHTML = str;
        str = h77.join(' ');
        document.getElementById("g").innerHTML = str;
        str = h78.join(' ');
        document.getElementById("h").innerHTML = str;
    }
    if (hinIndex == 2) {
        str = h31.join(' ');
        document.getElementById("a").innerHTML = str;
        str = h32.join(' ');
        document.getElementById("b").innerHTML = str;
        str = h33.join(' ');
        document.getElementById("c").innerHTML = str;
        str = h34.join(' ');
        document.getElementById("d").innerHTML = str;
        str = h35.join(' ');
        document.getElementById("e").innerHTML = str;
        str = h36.join(' ');
        document.getElementById("f").innerHTML = str;
        str = h37.join(' ');
        document.getElementById("g").innerHTML = str;
        str = h38.join(' ');
        document.getElementById("h").innerHTML = str;
        str = h39.join(' ');
        document.getElementById("i").innerHTML = str;
        str = h310.join(' ');
        document.getElementById("j").innerHTML = str;
        str = h311.join(' ');
        document.getElementById("k").innerHTML = str;
        str = h312.join(' ');
        document.getElementById("l").innerHTML = str;
    }
    document.getElementById("getCorrect").style.display = "none";
    document.getElementById("answersToggle").style.visibility = "visible";
}
function hideAnswers() {
    document.getElementById("answersToggle").style.display = "none";
    document.getElementById("answers").style.visibility = "hidden";
    document.getElementById("answersToggle2").style.visibility = "visible";
    document.getElementById("answersToggle2").style.display = "block";
}
function showAnswers() {
    document.getElementById("answers").style.visibility = "visible";
    document.getElementById("answersToggle").style.display = "block";
    document.getElementById("answersToggle2").style.display = "none";
}