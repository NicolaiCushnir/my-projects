var alpha = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z",
    26: "0",
    27 : "1",
    28 : "2",
    29 : "3",
    30 : "4",
    31 : "5",
    32 : "6",
    33 : "7",
    34 : "8",
    35 : "9"
};

function crypt() {

    var cheia = document.getElementById("cheia").value;
    var mesaj = document.getElementById("mesaj").value;
    var mesaj = mesaj.toLowerCase();
    var crypted = "";

    for (var i of mesaj) {
        if (mesaj.charCodeAt(i) < 32 || mesaj.charCodeAt(i) > 127) {
            crypted = "Invalid message! Nu introduceti litere ruse.";
            return;
        }
    }

    if (cheia >= 0 && cheia <= 35) {
        for (var i of mesaj) {
            for (var j in alpha) {
                if (alpha[j] === i) {
                    var pos = j;
                    for (var k = 0; k < cheia; k++) {
                        if (pos == 35) {
                            pos = 0;
                        } else {
                            pos++;
                        }
                    }
                    crypted += alpha[pos];
                }
            }
        }
        document.getElementById("resultat").innerHTML = crypted;
        return;
    }
    document.getElementById("resultat").innerHTML = "invalid key";
    return;
}

function decrypt() {

    var cheia = document.getElementById("cheia").value;
    var mesaj = document.getElementById("mesaj").value;

    var decrypted = "";
    if (cheia >= 0 && cheia <= 35) {
        for (var i of mesaj) {
            for (var j in alpha) {
                if (alpha[j] === i) {
                    var pos = j;
                    for (var k = cheia; k > 0; k--) {
                        if (pos == 0) {
                            pos = 35;
                        } else {
                            pos--;
                        }
                    }
                    decrypted += alpha[pos];
                }
            }
        }
        document.getElementById("resultat").innerHTML = decrypted;
        return;
    }
    document.getElementById("resultat").innerHTML = "invalid key";
    return;
}

