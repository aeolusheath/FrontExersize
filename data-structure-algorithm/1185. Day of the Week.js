/**
 * 
 Given a date, return the corresponding day of the week for that date.

  The input is given as three integers representing the day, month and year respectively.

  Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

  

  Example 1:

  Input: day = 31, month = 8, year = 2019
  Output: "Saturday"
  Example 2:

  Input: day = 18, month = 7, year = 1999
  Output: "Sunday"
  Example 3:

  Input: day = 15, month = 8, year = 1993
  Output: "Sunday"
  

  Constraints:

  The given dates are valid dates between the years 1971 and 2100.
 * 
 * 
 */

// 1971 -01 -01 是星期五
// 闰年多一天
// 闰年第个月多一天
var dayOfTheWeek = function(day, month, year) {
  //                                                                     1 - 1号
  let weekStr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let totalDaysFrom1971 = 0

  const isLeapYear = (year) => (year % 100 != 0 && year % 4 == 0) || (year % 400 === 0) 
  
  const MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // 过往年份的总天数, 润年每一年多一天
  for (let i = 1971; i < year; i++) {
    totalDaysFrom1971 += (365 + (isLeapYear(i) ? 1 : 0))
  }
  // 当前年份的的已经经历的月份的总天数
  let totalMonthDays = 0
  // 逻辑错误，month为3的时候，2月份需要多+1天，为2的时候，加上天数就可以了
  for (let j = 1; j <= (month - 1); j++) {
    // if (month ===  3) {
    //   totalMonthDays += (28 + (isLeapYear(year) ? 1: 0))
    // } else {
      totalMonthDays += MonthDays[j - 1]
    // }
  }

  // 如果月份已经过了2月份 并且当前年为润年 那么多一天
  if (month >= 3 && isLeapYear(year)) {
    totalMonthDays++
  }

  totalDaysFrom1971 += totalMonthDays
  // 当前年份的当前月份的总天数
  totalDaysFrom1971 += day
  return weekStr[(totalDaysFrom1971 + 4) % 7]
};
// 1 - 5 
// 2 - 6
// 3 - 7
// 4 - 1
// 5 - 2
// 6 - 3
// 7 - 4

// 8 - 5
// console.log(dayOfTheWeek(2, 1, 1971))
console.log(dayOfTheWeek(31, 8, 2019))


//class Solution {
//   public String dayOfTheWeek(int day, int month, int year) {
//     String[] weekStr = new String[]{"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
//     int sum = 4;
//     if (year > 1971)
//         for (int i = 1971; i < year; i++) {
//             sum += 365;
//             if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) sum++;
//         }
//     int[] months = new int[]{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
//     for (int i = 0; i < month - 1; i++) sum += months[i];
//     if (month >= 3 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) sum++;
//     sum += day;
//     return weekStr[sum % 7];
//  }
// }




