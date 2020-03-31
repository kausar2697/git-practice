console.log("NOT NOT");

function print(name){
    console.log('HELLO'+' '+name);
}
print('kausar');

function callback(a,b,callback){
 callback(a,b);
}

function add(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

callback(30,10,sub);
