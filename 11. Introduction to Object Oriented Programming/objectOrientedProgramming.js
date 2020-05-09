//************************Class template********************* */

/*
class Ract{
    constructor(width,height){
        this.width=width
        this.height=height
    }
    calculateArea(){
        return this.width* this.height
    }
    calculateRange(){
        return 2*(this.width+this.height)
    }
}

var ract = new Ract(10,20)
var ract1 =new Ract(40,50)
console.log(ract.calculateArea()) //200
console.log(ract1.calculateArea()) //20000
*/
//################################################################
 
//***********************factory pattern*********************** */
/*
var createRect =function(width,height){
    return{  
        width: width,
        height: height,
        draw: function(){
            console.log('i am a rectangle')
            this.printProperties()

        },
        printProperties: function(){
            console.log('My width is'+this.width)
            console.log('My height is'+this.height)
        }
    }
}

var rect1 = createRect(10,20);
rect1.draw();
var rect2 = createRect(676,575)
rect2.draw() 
*/
//###################################################################

//***********************Constructor pattern********************** */

var Rectangle = function(width,height){
    this.width=width
    this.height=height

    this.draw= function(){
        console.log('i am a rectangle')
        this.printProperties()
    }

    this.printProperties=function(){
        console.log('My width is'+this.width)
        console.log('My height is'+this.height)
    }
}

var rect1= new Rectangle(70,80)
rect1.draw();
//###################################################################//#endregion

//************************Using Call,apply,Bind************ */

function myFunc(c,d){
    console.log (this.a+this.b+c+d)
}

myFunc.call({a:30,b:70},9,10) //call instant

myFunc.apply({a:80,b:90},[10,5]) //call instant

var myBind=myFunc.bind({a:5,b:7}) //bind only data with object
myBind(9,8)

//#########################################################//#endregion
//******************call by value**************************** */
 
//if we pass a primitive value as an arguments of a function is does not change its original value
var n= 10

function change(n){
    n=n+100
    console.log(n)
}

change(n)

console.log(n)

//#########################################################//#endregion
//******************call by reference**************************** */
 
//if we pass a object value as an arguments of a function is can change its original value

var obj={
    a:7,
    b:8
}

function changeMe(obj){
    obj.a=obj.a+100
    obj.b=obj.b+100
    console.log(obj)
}

changeMe(obj)
console.log(obj)
//#################################################################//#endregion

//*************************Abstraction***************************** */

var Rectangle1 = function(width,height){
    this.width=width
    this.height=height
    var position={
        x:90,
        y:40
    }

    var printProperties=function(){    //for abstraction need to use local variable
        console.log('My width is'+this.width)
        console.log('My height is'+this.height)
    }.bind(this)

    this.draw= function(){
        console.log('i am a rectangle')
        printProperties()
    }

    
}

var rect7= new Rectangle1(8,5)
rect7.draw()

//########################################################//#endregion

//*************************using getter & setter**************** */

var Rectangle2 = function(width,height){
    this.width=width
    this.height=height
    var position={
        x:90,
        y:40
    }

    var printProperties=function(){    //for abstraction need to use local variable
        console.log('My width is'+this.width)
        console.log('My height is'+this.height)
    }.bind(this)

    this.draw= function(){
        console.log('i am a rectangle')
        printProperties()
    }

    Object.defineProperty(this,'position',{
        get: function(){
            return position
        },
        set: function(value){
            position=value
        }
    })
  
}

var rect8= new Rectangle2(50,34)
 rect8.position={
     x:99,
     y:-99
 }
 console.log(rect8.position)