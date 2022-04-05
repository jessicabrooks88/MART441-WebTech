class Square {
    constructor(x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }

    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setHeight(height) {
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    setColor(color) {
        this.color = color;
    }
    get theX() {
        return this.x;
    }
    get theY() {
        return this.y;
    }
    get theHeight() {
        return this.height;
    }
    get theWidth() {
        return this.width;
    }
    get theColor() {
        return this.color;
    }
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;