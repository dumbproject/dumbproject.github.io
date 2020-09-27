var interval
var counter = 0
var spaz = document.getElementById('spaz')

function reload() {
  interval = setInterval(() => {
    // document.querySelector('h1').innerText = counter;
    document.getElementById('spaz').innerText = counter
    counter++
    console.log(counter)
    location.reload()
  }, 100)
}

function stop() {
  interval.clearInterval()
  interval = undefined
}

var load = () => {
  console.log('load called', interval)
  location.reload()
}
var refresh = () => {
  console.log('starting', interval)
  interval = setInterval(load, 1000)
}
