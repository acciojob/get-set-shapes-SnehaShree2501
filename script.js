//complete this code
class Rectangle {
    width;
    height;
    constructor(_width,_height){
        this.width=_width;
        this.height=_height;
    }
    get width(){
        return this.width;
    }
    get height(){
        return this.height;
    }
    getArea(){
        return(this.width*this.height);
    }
    getPerimeter(){
        return (2*(this.width+this.height));
    }

}

// class Square extends Rectangle {
//     _side;
//     constructor(side){
//         super(side,side);
//     }
//     getPerimeter(side){
//     super.getPerimeter(side);
//     }
//     }

class Square extends Rectangle {
    constructor(side){
     super(side, side);
    // this.side = side;
     }
   getPerimeter(){
       return 4*this.side;
   }
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
