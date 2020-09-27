// deprecated




// var customRate = document.getElementById('rateInput')
// var rate = 16.30
// var profit = 0
// var seconds = 0
// var start
//
// // function handleButtonClick(event) {
// //   run()
// // }
//
// function run() {
//   // stop()
//   start = setInterval(count, 10) // every hundredth of a second
// }
//
// function count() {
//   if (rate = !null) {
//     rate = Number(customRate.value)
//   }
//   profit = (customRate.value / 3600) * seconds // update hourly wage per 1/100 of a second
//   seconds += .01 // update the time by 1/100 of a second
//   var minutes = seconds / 60
//   var hours = minutes / 60
//   var shift = hours / 8
//
//   var perSecond = rate / 3600
//   var perMinute = rate / 60
//   var perDay = rate * 8
//
//   var inputvalue
//   inputvalue = rate
//   inputvalue = customRate
//   var paycheck = document.getElementById('paycheck')
//   paycheck.innerHTML = '<br><span style="background-color:green;color:white;font-size:25px;padding:5px;">$' +
//                         profit.toFixed(2) + '</span><br><br>&nbsp;<span style="color:red;background-color:black;">' +
//                         seconds.toFixed(2) + ' seconds</span><br>&nbsp;' +
//                         minutes.toFixed(4) + ' minutes<br>&nbsp;' +
//                         hours.toFixed(6) + ' hours<br><br>&nbsp;' +
//                         shift.toFixed(6) + '% of 8hr shift<br><br>$' +
//
//                         perSecond.toFixed(6) + ' / second<br>$' +
//                         perMinute.toFixed(4) + ' / minute<br>$' +
//                         rate.toFixed(2) + ' / hour<br>$' +
//                         perDay.toFixed(2) + ' / day<br><br>$' +
//
//                         rate * 40 + ' / week<br>$' +
//                         rate * 40 * 2 + ' / bi-weekly<br>$' +
//                         rate * 40 * 4 + ' / month<br>$' +
//                         rate * 40 * 52 + ' / year<br>'
// }
//
// function stop() {
//   if (start) {
//     seconds = 0
//     profit = 0
//     clearInterval(start)
//     start = undefined
//   }
// }
