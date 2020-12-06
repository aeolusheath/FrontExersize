package ds
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
func dayOfTheWeek(day, month, year int) string {
	var weekStr [7]string = [7]string {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}
	var monthDays []int = []int {31, 28, 31, 30, 31, 30, 31, 31,30, 31, 30, 31}
	var totalDaysFrom1971 = 0

	var isLeapYear = func (year int) bool {
		return (year % 4 == 0 && year % 100 != 0) || (year % 400 ==0)
	}

	// 年-不包括当前年份的所有年的天数
	for i := 1971; i < year; i++ {
		totalDaysFrom1971 += 365
		if isLeapYear(i) {
			totalDaysFrom1971 += 1
		}
	}

	// 月-不包含当前月的所有月的天数
	var totalMonthDays = 0
	for i := 1; i < month - 1; i++ {
		totalMonthDays += monthDays[i-1]
	}
	if isLeapYear(year) && month >= 3 {
		totalMonthDays++
	}

	return weekStr[(totalDaysFrom1971 + totalMonthDays + day + 4) % 7]
} 