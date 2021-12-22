class Circle {
    radius;
    color;

    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }

getArea(){
        return this.radius*this.radius*Math.PI;
}
getRadius(){
        return this.radius;
}

}
