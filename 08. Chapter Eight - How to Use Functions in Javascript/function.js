
//declaration*****************************************
function functionName(a,b){
//body
}


function print(name) {
    console.log('HELLO' + ' ' + name);
}
print('kausar');

//callback function********************************

function callback(a, b, callback) {
    callback(a, b);
}

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

callback(30, 10, sub);


//arguments object*********************************

function arg(a,b,c){

console.log(arguments)
for(var i=0; i<arguments.length;i++){
    console.log(arguments[i])
}


}

arg(5,5,6)  //[Arguments] { '0': 5, '1': 5, '2': 6 }


//uses of arguments object********************************


function addAll(){
    var sum = 0
    for(var i=0;i<arguments.length;i++){
        sum +=sum+arguments[i]
    }
    console.log(sum)
}

addAll(323,42342,5,3454,54,6,6,64,55,45,344,4,23,23)


//return from function*****************************

function person(name,email)
{
    return{
        name : name,
        email :email
    }
}

var p1 = person('kausar', 'kausar.islam.iubat@gmail.com')
console.log(p1)



//function as expression****************(when a function act as a value)

var addition  = function(a,b){   //function expression using anonymous function
    return a+b

}

console.log(addition(40,40))

setTimeout(function(){                     //setTimeout method
    console.log('i will call after 5 sec')
},5000)


//inner function********************(declare one function under another function)

function someThing(greet, name){
    function sayHi(){
        console.log(greet, name)
    }
    sayHi()
}

someThing('Good morning', 'kausar')


//uses of inner function

function something(greet,name){
    function getFirstName(){
        return name.split(' ')[0]     //using splite method
    }
    var message = greet + ' ' + getFirstName()
    console.log(message)
}

something('Good morning','kausar islam')


