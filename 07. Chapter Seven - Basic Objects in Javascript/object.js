//object literal******************************
var point ={}

point.x = 10;

console.log(point)

//element declaration

var point = {
  
    y : 20
}

console.log(point)

point.z = 400 //insert new data in object


//object construct*******************************

var obj = Object()
obj.a =10


var obj2 = new Object()
obj2.b=20


//way of object access****************************

//dot notation
var ob = {
    x : 10,
    y :30,
    z :599
}

console.log(ob.x) 

//array notation
console.log(ob['x'])


//object property update*********************

ob.x=55  //dot notation

ob['y'] = 43  //array notation



//object property remove***********************

ob.a = undefined

delete ob.a    //using delete operator
console.log(ob)


//compare two object***********************

console.log(point===ob)  //using boolean - it gives false because of two memory location

if(point.a==ob.a){console.log(true)} //compare each element
else{console.log(false)}



console.log(JSON.stringify(point)== JSON.stringify(ob)) //convert properties into string




//iterate object ***********************

console.log('x' in ob) // using "in" operation


for(var i in ob){     //using for in loop
    console.log(i)
    console.log(ob[i])
}




//object methods*****************************

console.log(Object.keys(ob)) //[ 'x', 'y', 'z' ]

console.log(Object.values(ob))  //[ 55, 43, 599 ]

console.log(Object.entries(ob)) //[ [ 'x', 55 ], [ 'y', 43 ], [ 'z', 599 ] ]


var ob5 = Object.assign({},ob) //clone object from another object
console.log(ob5)

