english1 = 'The child liked the chocolate.';
english2 = 'She was stopped by the bravest knight.';
english3 = 'Mary baked a cake for his birthday.';
english4 = 'She decorated the cake carefully.';
english5 = 'Mary wore a dress with polka dots.';

hindi1 = 'राम ने सीता के लिए फल तोड़ा|';
hindi2 = 'छोटे बच्चे पाठशाला जल्दी आयेंगे|';
hindi3 = 'मेहनत का फल मीठा होता है|';
hindi4 = 'वाह! वह खूबसूरत है|';
hindi5 = 'पेड़ से पत्ते गिर गए|';

document.getElementById("message").style.visibility = "hidden";

function languageSelection() {
    var displaySelection = document.getElementById("languageSelection").value;
    if (displaySelection == 'english') {
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("sentanceSelection").innerHTML = '<select id="corpusEnglish" onchange="englishSelection()"><option value="null">---Select a Sentance---</option><option value="a">' + english1 + '</option><option value="b">' + english2 + '</option><option value="c">' + english3 + '</option><option value="d">' + english4 + '</option><option value="e">' + english5 + '</option></select>';
        document.getElementById("main").innerHTML = "";
        document.getElementById("submitButton").innerHTML = "";
    }
    if (displaySelection == 'hindi') {
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("sentanceSelection").innerHTML = '<select id="corpusHindi" onchange="hindiSelection()"><option value="null">---Select a Sentance---</option><option value="a">' + hindi1 + '</option><option value="b">' + hindi2 + '</option><option value="c">' + hindi3 + '</option><option value="d">' + hindi4 + '</option><option value="e">' + hindi5 + '</option></select>';
        document.getElementById("main").innerHTML = "";
        document.getElementById("submitButton").innerHTML = "";
    }
}
function englishSelection() {
    document.getElementById("message").style.visibility = "visible";
    var sentance = document.getElementById("corpusEnglish").value;
    if (sentance == 'a') {
        makeTableE(english1);
    }
    if (sentance == 'b') {
        makeTableE(english2);
    }
    if (sentance == 'c') {
        makeTableE(english3);
    }
    if (sentance == 'd') {
        makeTableE(english4);
    }
    if (sentance == 'e') {
        makeTableE(english5);
    }
}
function hindiSelection() {
    document.getElementById("message").style.visibility = "visible";
    var sentance = document.getElementById("corpusHindi").value;
    if (sentance == 'a') {
        makeTableH(hindi1);
    }
    if (sentance == 'b') {
        makeTableH(hindi2);
    }
    if (sentance == 'c') {
        makeTableH(hindi3);
    }
    if (sentance == 'd') {
        makeTableH(hindi4);
    }
    if (sentance == 'e') {
        makeTableH(hindi5);
    }
}
var dropdownE = '<select id="selectPOS"><option value="noun" selected>Noun</option><option value="pronoun">Pronoun</option><option value="conjunction">Conjunction</option><option value="interjection">Interjection</option><option value="verb">Verb</option><option value="determiner">Determiner</option><option value="adjective">Adjective</option><option value="adverb">Adverb</option><option value="preposition">Preposition</option></select>'
var dropdownH = '<select id="selectPOS"><option value="noun" selected>Noun</option><option value="pronoun">Pronoun</option><option value="conjunction">Conjunction</option><option value="interjection">Interjection</option><option value="verb">Verb</option><option value="determiner">Determiner</option><option value="adjective">Adjective</option><option value="adverb">Adverb</option><option value="postposition">Postposition</option></select>'
function makeTableE(lang) {
    lang = lang.replace(/[^\w\s]|/g, "");
    arr = lang.split(" ");
    document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
    for (var i = 0; i < arr.length; i++) {
        document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td>"+ dropdownE + "</td><td></td><td></td></tr>";
    }
    document.getElementById("submitButton").innerHTML = "<button>Submit</button>";
}
function makeTableH(lang) {
    arr = lang.split(" ");
    document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
    for (var i = 0; i < arr.length; i++) {
        document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td>"+ dropdownH +"</td><td></td><td></td></tr>";
    }
    document.getElementById("submitButton").innerHTML = "<button>Submit</button>";
}
