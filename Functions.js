
/*
 * Create the function factorial here
 */
function factorial(n) {
    let temp;
    let staticN = n;
    temp = 1;
    while (temp<staticN) {
        n = n*(staticN-temp);
        temp++;
    }
    return n;
}