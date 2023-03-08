//declare function
function hourToMinute(hour) {
    var minute = hour * 60;
    return minute;
}

var myHour = 24;
//call function and send variable to function as parameter
var myHourMinute = hourToMinute(myHour);
console.log(myHourMinute);