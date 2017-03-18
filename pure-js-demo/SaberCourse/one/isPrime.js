const isPrimeNum = function(num){
  var tempNum = Math.floor(Math.sqrt(num))
  var isPrime = true
  for(i=2; i<=tempNum; i++){
    if(num%i===0) {
      isPrime = false
      break
    }
  }
  return isPrime
}

var parameter = parseInt(process.argv[2])

console.log('这个数字是素数吗？', isPrimeNum(parameter))