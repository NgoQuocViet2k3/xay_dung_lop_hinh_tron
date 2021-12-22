class Circle {
    radius;
    color;

    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }

    get radius() {
        return this.radius;
    }
getArea(){
        return this.radius*this.radius*Math.PI;
}
getRadius(){
        return this.radius;
}

}
