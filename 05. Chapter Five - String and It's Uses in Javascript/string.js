


//scape notation

var str = 'this is a \'string\''
console.log(str)

var str = 'this is a \n string'
console.log(str)

var str = 'this is a \t string'
console.log(str)

var str = 'this is a \\string'
console.log(str)


//string methods

var a = 'i am '
var b = 'ok'

var c = a.concat( '',b)

console.log(c);

var d = c.substring(5)
var d = c.substring(5,2)


console.log(c.charAt(3))


console.log(c.startsWith('i'))
console.log(c.endsWith('ok'))
console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log('    fakdfjdkfj   '.trim())


console.log(c.split(' '))

console.log(typeof c)
