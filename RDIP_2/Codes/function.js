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
    }
    if (displaySelection == 'hindi') {
        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("sentanceSelection").innerHTML = '<select id="corpusHindi" onchange="hindiSelection()"><option value="null">---Select a Sentance---</option><option value="a">' + hindi1 + '</option><option value="b">' + hindi2 + '</option><option value="c">' + hindi3 + '</option><option value="d">' + hindi4 + '</option><option value="e">' + hindi5 + '</option></select>';
        document.getElementById("main").innerHTML = "";
    }
}
function englishSelection() {
    document.getElementById("message").style.visibility = "visible";
    var sentance = document.getElementById("corpusEnglish").value;
    if (sentance == 'a') {
        document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
        english1 = english1.replace(/[^\w\s]|/g, "");
        arr = english1.split(" ");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("main").innerHTML += "<tr><td>"+arr[i]+"</td><td> </td><td></td><td></td></tr>";
        }
    }
    if (sentance == 'b') {
        document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
        english2 = english2.replace(/[^\w\s]|/g, "");
        arr = english2.split(" ");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td> </td><td></td><td></td></tr>";
        }
    }
    if (sentance == 'c') {
        document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
        english3 = english3.replace(/[^\w\s]|/g, "");
        arr = english3.split(" ");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td> </td><td></td><td></td></tr>";
        }
    }
    if (sentance == 'd') {
        document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
        english4 = english4.replace(/[^\w\s]|/g, "");
        arr = english4.split(" ");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td> </td><td></td><td></td></tr>";
        }
    }
    if (sentance == 'e') {
        document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
        english5 = english5.replace(/[^\w\s]|/g, "");
        arr = english5.split(" ");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td> </td><td></td><td></td></tr>";
        }
    }
}
function hindiSelection() {
    document.getElementById("message").style.visibility = "visible";
    var sentance = document.getElementById("corpusHindi").value;
    if (sentance == 'a') {
        document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
        arr = hindi1.split(" ");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td> </td><td></td><td></td></tr>";
        }
    }
    if (sentance == 'b') {
        document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
        arr = hindi2.split(" ");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td> </td><td></td><td></td></tr>";
        }
    }
    if (sentance == 'c') {
        document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
        arr = hindi3.split(" ");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td> </td><td></td><td></td></tr>";
        }
    }
    if (sentance == 'd') {
        document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
        arr = hindi4.split(" ");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td> </td><td></td><td></td></tr>";
        }
    }
    if (sentance == 'e') {
        document.getElementById("main").innerHTML = "<tr><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
        arr = hindi5.split(" ");
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("main").innerHTML += "<tr><td>" + arr[i] + "</td><td> </td><td></td><td></td></tr>";
        }
    }
}