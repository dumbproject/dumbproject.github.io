var rate = 16.30
var customRate = document.getElementById('rateInput')
// console.log('rateInput', rateInput)

var ratemin = rate / 60
var ratesec = rate / 60 / 60

var profit = 0
var start

var seconds = 0
var minutes
var hours
var shift


function handleButtonClick(event) {
  // event.preventDefault()
  console.log("rate: ", rate)
  run()
  console.log(rate)
}

// customRate.addEventListener('change', handleButtonClick);

function run() {
  // var button = document.getElementById("button")
  // button.classList.add("invisible")
  stop()
  start = setInterval(count, 100) // every hundredth of a second
}

function count() {
  if (rate = !null) {
    rate = Number(customRate.value)
  }
  profit = (customRate.value / 3600) * seconds // ate hourly wage per 1/0 of a second
  seconds += .1 // update the time by 1/10 of a second
  minutes = seconds / 60
  hours = minutes / 60
  shift = hours / 8

  var secondly = rate / 3600
  var minutely = rate / 60
  var day = rate * 8

  var inputvalue
  inputvalue = rate
  inputvalue = customRate
  var paycheck = document.getElementById('paycheck')
  paycheck.innerHTML = '<br><span style="background-color:green;color:white;">$' +
                        Math.floor(profit * 100) / 100        + '</span><br><br>&nbsp;<span style="color:red;background-color:black;">' +
                        seconds.toFixed(1)         + ' seconds</span><br>&nbsp;' +
                        minutes.toFixed(4) + ' minutes<br>&nbsp;' +
                        hours.toFixed(6) + ' hours<br><br>&nbsp;' +
                        Math.floor(shift * 1000000) / 1000000 + '% of 8hr shift<br><br>$' +

                        secondly.toFixed(6) + ' / second<br>$' +
                        minutely.toFixed(4) + ' / minute<br>$' +
                        rate.toFixed(2) + ' / hour<br>$' +
                        day.toFixed(2) + ' / day<br><br>$' +

                        rate * 40 + ' / week<br>$' +
                        rate * 40 * 2 + ' / bi-weekly<br>$' +
                        rate * 40 * 4 + ' / month<br>$' +
                        rate * 40 * 52 + ' / year<br>'
}

function stop() {
  if (start) {
    seconds = 0
    profit = 0
    clearInterval(start)
    start = undefined
  }
}
