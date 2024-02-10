class Shape{
    constructor(){
        this.inputValue;
    }
    calculateArea(resultantArea){
        return resultantArea;
    }
    calculatePerimeter(resultantPerimeter){
        return resultantPerimeter;
    }
}

class Circle extends Shape{
    constructor(inputValue){
        super(inputValue)
        this.radius = inputValue;
    }
    calculateArea(){
        return super.calculateArea(Math.PI * this.radius**2)
    }
    calculatePerimeter(){
        return super.calculatePerimeter(2* Math.PI * this.radius);
    }
}

class Rectangle extends Shape{
    constructor(inputValue,breadth){
        super(inputValue)
        this.Length = inputValue;
        this.breadth = breadth;
    }
    calculateArea(){
        return super.calculateArea(this.Length * this.breadth);
    }
    calculatePerimeter(){
        return super.calculatePerimeter( 2 * (this.Length + this.breadth))
    }
}

class Triangle extends Shape{
    constructor(inputValue,height,side1,side2,side3){
        super(inputValue)
        this.base = inputValue;
        this.height  = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    calculateArea(){
        return super.calculateArea( 1/2  * this.base * this.height );
    }
    calculatePerimeter(){
        return super.calculatePerimeter(this.side1 + this.side2 + this.side3)
    }
}


const circle = new Circle(5);
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(4,6);
console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);


const triangle = new Triangle(8,6,5,7,10);
console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);
