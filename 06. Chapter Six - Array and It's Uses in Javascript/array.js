
//using literal way
var arr =[3,4,5,6,7]
arr[5]=6

console.log(arr[0])

console.log(arr.length)

//using constructor way
var arr2 =Array(1,2,3)
console.log(arr2)


//array traverse

for(var i=0 ;i<arr.length;i++){
    console.log(arr[i])
}


//insert and remove data in data

arr.push(9) //insert 9 in last index

arr.unshift(9)  //insert 9 in first index

arr.splice(3,0, 9, 10) //insert 9 and 10 in 4th index

arr[3] = undefined;

arr.pop()   //remove from last index

arr.shift    //remove from first index

arr.splice(3,1) // remove from 3rd index





//search data 
var find = 33
isFound = false


for(var i=0;i<arr.length;i++){
    if(arr[i]==find){
        console.log('the data is found' + i)
        isFound=true
        break
    }
   
}
if(!isFound){
    console.log('data not found')
}


//two dimensional array
var arr1= [
    [21,43,31,64],
    [43,36,78,53],
    [54,36,75,86],
    [43,32,53,54]
]

for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr1[i].length;j++){
        console.log('Element ' + i+ arr1[i][j])
    }
}


//array reverse
console.log(arr)
var arr2=[]

for(var i=arr.length-1;i>0;i--){
    arr2.push(arr[i])

}
console.log(arr2)

// for efficient

for(var i=0;i<arr.length/2;i++){
    var temp = arr[i]
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i]=temp
}

console.log(arr)


//array methods 

console.log(arr.join(' ')) //6 7 6 5 10 4 3 9

//console.log(arr.fill(0)) //0, 0, 0, 0,

console.log(arr.concat(arr1)) 

console.log(Array.isArray(arr))

var arr3 = Array.from(arr)


