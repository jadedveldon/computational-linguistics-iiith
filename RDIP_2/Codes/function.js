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

function languageSelection() {
    var displaySelection = document.getElementById("languageSelection").value;
    if (displaySelection == 'english') {
        document.getElementById("sentanceSelection").innerHTML = '<select id="corpusEnglish"><option value="null">---Select a Sentance</option><option value="a">' + english1 + '</option><option value="b">' + english2 + '</option><option value="c">' + english3 + '</option><option value="d">' + english4 + '</option><option value="e">' + english5 + '</option></select>';
    }
    if (displaySelection == 'hindi') {
        document.getElementById("sentanceSelection").innerHTML = '<select id="corpusHindi"><option value="null">---Select a Sentance</option><option value="a">' + hindi1 + '</option><option value="b">' + hindi2 + '</option><option value="c">' + hindi3 + '</option><option value="d">' + hindi4 + '</option><option value="e">' + hindi5 + '</option></select>';
    }
}