function leapYear(year) {
    var leapYearArr = [];
    for (i = 0; i <= year.length; i++) {
        if (year[i] % 4 == 0) {
            leapYearArr.push(year[i]);
        }
    }
    return leapYearArr;

}

var years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2026, 2027, 2028]
var result = leapYear(years);
console.log(result);