//property descriptor#############################################

var person ={
    name : 'kausar'
}

console.log(person)

var descriptor = Object.getOwnPropertyDescriptor(person,'name')
console.log(descriptor)
//output.....
// {value: "kausar", writable: true, enumerable: true, configurable: true}
// configurable: true
// enumerable: true
// value: "kausar"
// writable: true

var baseObj = Object.getPrototypeOf(person)
console.log(baseObj)

var descriptor1 = Object.getOwnPropertyDescriptor(baseObj,'toString')
console.log(descriptor1)


Object.defineProperty(person,'name',{
    enumerable: false,
    writable: false,
    configurable: false,
    value: 'kausar islam'
})


person.name = 'kausar islam'

console.log(person)

for(var i in person){
    console.log(i)
}

//instance vs prototype member###################################

function square(width){
    this.width=width
}

square.prototype={
    draw: function(){
        console.log('draw')
    },
    toString:function(){
        return 'my width is ='+ this.width
    }
} 

var sqr1 = new square(10)
var sqr2 = new square(5) 