const count = () => {
    let noc = document.getElementById('data').value.length;
    let now = document.getElementById('data').value;
    let sentence = document.getElementById('data').value;
    let para = document.getElementById('data').value;

    let re = /[.!?]/;
    sentence = sentence.split(re);
    sentence = sentence.length - 1;

    let re2 = /\r?\n|\r/;
    para = para.split(re2);
    para = para.length - 1;

    now = now.match(/\w+/g);
    now = now.length;


    let wordCounts = repeat();


    document.getElementById('showchars').innerHTML = "The Total Characters : " + noc;
    document.getElementById('showwords').innerHTML = "The Total Words : " + now;
    document.getElementById('showsentence').innerHTML = "The Total Sentences : " + sentence;
    document.getElementById('showpara').innerHTML = "The Total Paragraphs : " + para;
    document.getElementById('rw').innerHTML += 'Repeat Words: ' +
        JSON.stringify(wordCounts, null, 2);
}

function repeat() {
    let str = document.getElementById('data').value;
    let strStripped = str.replace(/[,.!]/g, ' ');

    let words = strStripped.toLowerCase().split(' ');
    let x = [];

    for (let j = 0; j <= 1; j++) {
        for (let y = 0; y <= words.length; y++) {
            if (words[y] === "") {
                y++;
                continue;
            } else {
                x[j] = words[j];
                j++;
            }
        }
    }

    for (let i = 0; i < x.length; i++) {
        x[i] = x[i].replace("\n\n", "");
    }
    for (let i = 0; i < x.length; i++) {
        x[i] = x[i].replace("\n", "");
    }

    let wordCounts = {};
    x.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });


    Object.filter = (obj, predicate) =>
        Object.keys(obj)
        .filter(key => predicate(obj[key]))
        .reduce((res, key) => (res[key] = obj[key], res), {});

    var filtered = Object.filter(wordCounts, score => score > 1);
    return filtered;
}

const clr = () => {
    document.getElementById('data').value = "";
    document.getElementById('showchars').innerHTML = "";
    document.getElementById('showwords').innerHTML = "";
    document.getElementById('showsentence').innerHTML = "";
    document.getElementById('showpara').innerHTML = "";
    document.getElementById('rw').innerHTML = "";
}