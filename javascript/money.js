var rate = 16.30
var seconds = 0
var profit = 0
var x
var minutes
var hours
var shift

function run() {
  stop()
  x = setInterval(count, 100)
}

function count() {
  seconds += .1
  profit += (rate / 36000)
  minutes = seconds / 60
  hours = minutes / 60
  shift = hours / 8
  // console.log(profit)
  var paycheck = document.getElementById('paycheck')
  paycheck.innerHTML = '<br>&nbsp;<span style="color:red;background-color:black;">' +
                        Math.floor(seconds * 10) / 10 + ' seconds</span><br>&nbsp;' +
                        Math.floor(minutes * 1000) / 1000 + ' minutes<br>&nbsp;' +
                        Math.floor(hours * 100000) / 100000 + ' hours<br>&nbsp;' +
                        Math.floor(shift * 1000000) / 1000000 + '% of 8hr shift<br><span style="background-color:white;color:green;">$' +
                        Math.floor(profit * 100) / 100 + '</span>'
}

function stop() {
  if (x) {
    seconds = 0
    profit = 0
    // x.clearInterval()
    x = undefined
  }
}
