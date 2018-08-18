function getLetter(s) {
    let letter;
    var temp;
    // Write your code here
    temp = s[0];
    if (temp=="a" || temp=="e" || temp=="i" || temp=="o" || temp=="u") {
        letter = "A";
    }
    else if (temp=="b" || temp=="c" || temp=="d" || temp=="f" || temp=="g") {
        letter = "B";
    }
    else if(temp=="h" || temp=="j" || temp=="k" || temp=="l" || temp=="m") {
        letter = "C";
    }
    else {
        letter = "D";
    }
    return letter;
}