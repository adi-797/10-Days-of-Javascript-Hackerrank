/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var l = s.length;
    var a="";
    var b="";
    var i;
    for (i=0; i<l; i++) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            a = a.concat(s[i]);
            }
        else{
            b = b.concat(s[i]);
        }
    }
    a = a.concat(b);
    for (i=0; i<a.length;i++){
        console.log(a[i]);
    }
}