/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon{
    constructor(sides){
        this.a = sides;
    }
}

Polygon.prototype.perimeter = function(){
    let perimeter = 0;
    for (const i in this.a){
        perimeter += this.a[i];
    }
    return perimeter;
}