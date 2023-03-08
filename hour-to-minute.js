function hourToMinute(hour) {
    var minute = hour * 60;
    return minute;
}

var myHour = 24;
var myHourMinute = hourToMinute(myHour);
console.log(myHourMinute);