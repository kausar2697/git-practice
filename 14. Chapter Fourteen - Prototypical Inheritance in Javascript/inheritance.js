//#################inheritance#####################################

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



//##################################################################################

//*********************************extend functin ***********************************/

 function extend(parent,child){
        child.prototype= Object.create(parent.prototype) //prototype reset
        child.prototype.constructor= child  //constructor reset
 }
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
       
       
      extend(Shape,Square)
       
       
       
       Square.prototype.draw = function(){    //prototype extend
               console.log('drawing')
       }
       
       
       var s1= new Square(37,80)
       
       s1.common()        //i am common Method

       //########################################################################

       //**************************function overriding / polymorphism************************ */


       function extend(parent, child){
               child.prototype= Object.create(parent.prototype)
               child.prototype.constructor=child
       }
       function Shape(color){
         this.color=color
       }

       Shape.prototype.common = function(){
               console.log("this is common function from shape proto")
       }

       function Square(width,color){
        Shape.call(this,color)
        this.width=width
       }

       Square.prototype.draw=function(){
               console.log("this is draw function for square proto")
       }
       
       extend(Shape,Square)


       Square.prototype.common=function(){       //function overriding
               console.log("this the common function from square")
       }

       var s1 = new Square(40,10)

       //##############################################################################################//#endregion

       //*****************************************Composition****************************************** */

       function mixing(target, ...source){            // ...source -> rest operator
               Object.assign(target, ...source)       // ...source --> spreader
       }

       var canWalk = {
          walk: function(){
                  console.log("walking..")
          }
       }

       var canEat = {
               eat:function(){
                       console.log("eating..")
               }
       }

       var canSwim ={
               swim: function(){
                       console.log("swimming..")
               }
       }

       function Person(name){
        this.name=name
       }

       mixing(Person.prototype,canEat,canWalk)

       //Object.assign(Person.prototype,canWalk,canEat)
       
       var p1 = new Person("kausar")


       function goldFish(){

       }

       mixing(goldFish.prototype,canEat,canSwim)

       var g1 = new goldFish()

       //#################################################################################################