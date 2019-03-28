// 边界值在哪里
// 重点1,从尾部开始循环 2, 提前返回 很关键

var plusOne = function (digits) {
  // const lastIndex = digits.length - 1
  // const lastNum = digits[lastIndex]
  // if (lastNum < 9) {
  //     digits[lastIndex] = lastNum + 1
  // }
  // return digits

  // var carry = 1;
  // for (let i = digits.length - 1; i >= 0; i--) {
  //   if (digits[i] === 9) {
  //     digits[i] = 0;
  //   }
  //   digits[i] = digits[i] + carry;
  // }

  const carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + carry;
    if (digits[i] <= 9) {
      return digits;
    }
    digits[i] = 0
  }
  digits.unshift(1)
  return digits
};
