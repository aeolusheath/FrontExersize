const process = (n) => n * n
var arr = new Array(1000000)
for (let i = 0, len = arr.length; i < len; i++) {
	arr[i] = i
}


let len = arr.length
console.time('first')
for (i = 0; i < len; i++) {
	process(arr[i])
}
console.timeEnd('first')



var iterations = Math.floor(len / 8)
var i = 0
var remainder = len % 8;

console.time('second')
if (remainder > 0) {
	do {
		process(arr[i++]);
	} while (--remainder > 0);
}
do {
	process(arr[i++]);
	process(arr[i++]);
	process(arr[i++]);
	process(arr[i++]);
	process(arr[i++]);
	process(arr[i++]);
	process(arr[i++]);
	process(arr[i++]);
} while (--iterations > 0);

console.timeEnd('second')


var a = undefined 
console.log(a) // undefined 
console.log(b)
a = 1 
function b() { console.log(a) }

b() // 1