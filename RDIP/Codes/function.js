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
var sentanceHindi = [
    ['राम', 'और', 'श्याम', 'बाजार', 'गयें'],
    ['राम', 'सोया', 'और', 'श्याम', 'भी'],
    ['मैंने', 'उसे', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'],
    ['राम', 'खाकर', 'सोया'],
    ['बिल्लियों', 'को', 'मारकर', 'कुत्ता', 'सो', 'गया'],
    ['एक', 'लाल', 'किताब', 'वहाँ', 'है'],
    ['एक', 'बड़ी', 'सी', 'किताब', 'वहाँ', 'है']
];
document.getElementById("reformSentance").style.visibility = "hidden";
document.getElementById("formedSentance").style.visibility = "hidden";
document.getElementById("checkButton").style.visibility = "hidden";
var inputArray=[];
var randomize;
function selectOptions() {
    var selection = document.getElementById("select").value;
    var text = "";
    if(selection == 'english' ){
        text = "Form a sentence (Declarative or Interrogative or any other type) from the given words<br>(select the buttons in proper order)";
        randomEnglish();
    }
    else if (selection == 'hindi' ){
        text = "Form a sentence (Declarative or Interrogative or any other type) from the given words<br>(select the buttons in proper order)";
        randomHindi();
    }
    else {
        alert("Select language");
    }
    document.getElementById("message").innerHTML = text;
}
function randomEnglish() {
    inputArray=[];
    var sentance = sentanceEnglish[Math.floor(Math.random() * sentanceEnglish.length)];
    randomize = randomizeWords(sentance);
    for (var i = 0; i < randomize.length; i++) {
        document.getElementById("randomButtons").innerHTML += "<button class='sentanceButtons' id= '" + i + "' onclick='clicker("+i+")'>" + randomize[i] + "</button>";
    }
}
function randomHindi() {
        inputArray = [];
    var sentance = sentanceHindi[Math.floor(Math.random() * sentanceHindi.length)];
    randomize = randomizeWords(sentance);
    for (var i = 0; i < randomize.length; i++) {
        document.getElementById("randomButtons").innerHTML += "<button class='sentanceButtons' id= '" + i + "' onclick='clicker(" + i + ")'>" + randomize[i] + "</button>";
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
    inputArray = "";
    document.getElementById("inputSentance").innerHTML = inputArray;
    document.getElementById("randomButtons").innerHTML = "";
    for (var i = 0; i < randomize.length; i++) {
        document.getElementById("randomButtons").innerHTML += "<button class='sentanceButtons' id= '" + i + "' onclick='clicker(" + i + ")'>" + randomize[i] + "</button>";
    }
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