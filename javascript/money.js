var rate = 16.30 / 60 / 60

var seconds = 0
var profit = 0
var x

function count() {
  stop()
  x = setInterval(run, 100)
}

function run() {
  seconds += 1
  profit += rate
  // console.log(profit)

  var paycheck = document.getElementById('paycheck')
  paycheck.innerHTML = (seconds / 10) + ' seconds = $' + profit
}

function stop() {
  if (x) {
    seconds = 0
    profit = 0
    x.clearInterval()
    x = undefined
  }
}
