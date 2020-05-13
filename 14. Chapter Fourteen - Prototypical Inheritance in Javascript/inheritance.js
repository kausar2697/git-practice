//#################inheritance#####################################
/*
function Shape(){

}

Shape.prototype.common=function(){
        console.log('i am common Method')
    
}

function Square(width){
    this.width=width

}


Square.prototype= Object.create(Shape.prototype) //prototype reset
Square.prototype.constructor= Square  //constructor reset



Square.prototype.draw = function(){    //prototype extend
        console.log('drawing')
}


var s1= new Square(37)

s1.common()        //i am common Method

//*************************************************************** */

//***************************** Super (For passing parameter to a parent class)************************** */

function Shape(color){
 this.color= color
} 

Shape.prototype.common=function(){
        console.log('i am common Method')
    
}

function Square(width,color){
    Shape.call(this,color)
    this.width=width

}


Square.prototype= Object.create(Shape.prototype) //prototype reset
Square.prototype.constructor= Square  //constructor reset



Square.prototype.draw = function(){    //prototype extend
        console.log('drawing')
}


var s1= new Square(37,80)

s1.common()        //i am common Method