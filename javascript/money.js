var rate = 16.30
var ratemin = rate / 60
var ratesec = rate / 60 / 60

var profit = 0
var x

var seconds = 0
var minutes
var hours
var shift

function run() {
  // document.getElementById("button").style.display = "none";
  stop()
  x = setInterval(count, 100) // every hundredth of a second
}

function count() {
  profit += (rate / 36000) // update
  seconds += .1 // update the time by 1/10 of a second
  minutes = seconds / 60
  hours = minutes / 60
  shift = hours / 8
  // console.log(profit)
  var paycheck = document.getElementById('paycheck')
  paycheck.innerHTML = '<br><span style="background-color:green;color:white;">$' +
                        Math.floor(profit * 100) / 100 + '</span><br><br>&nbsp;<span style="color:red;background-color:black;">' +
                        Math.floor(seconds * 10) / 10 + ' seconds</span><br>&nbsp;' +
                        Math.floor(minutes * 1000) / 1000 + ' minutes<br>&nbsp;' +
                        Math.floor(hours * 100000) / 100000 + ' hours<br><br>&nbsp;' +
                        Math.floor(shift * 1000000) / 1000000 + '% of 8hr shift<br><br>$' +
                        ratesec.toFixed(6) + ' / second<br>$' +
                        ratemin.toFixed(4) + ' / minute<br>$' +
                        rate.toFixed(2) + ' / hour<br>$' +
                        rate * 8 + ' / day<br>$' +
                        rate * 40 + ' / week<br>$' +
                        rate * 40 * 4 + ' / month<br>$' +
                        rate * 40 * 52 + ' / year<br>'
}

function stop() {
  if (x) {
    seconds = 0
    profit = 0
    // x.clearInterval()
    x = undefined
  }
}
