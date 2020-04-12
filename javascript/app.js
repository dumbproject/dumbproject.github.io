var lines = []
var sequence = []
function coinToss() {
  var value = 0
  var side = ''
  for(var i = 0; i < 3; i++) {
    if (Math.random() > 0.5) {
      value += 3
      side += ' tails'
    } else {
      value += 2
      side += ' heads'
    }
    console.log('value=' + value + 'side=' + side)
  }
  var results = ''
  results = side + '&nbsp;' + value.toString()
  if (value % 2 === 0) {
    lines.push(results + '&nbsp;----&nbsp;&nbsp;&nbsp;----')
    sequence.push(0)
  } else {
    lines.push(results + '&nbsp;-----------')
    sequence.push(1)
  }
  console.log('sequence=' + sequence)
}

function createHex() {
  for (var i = 0; i < 6; i++) {
    coinToss()
  }
  lines.reverse()
  for (var i = 0; i < 6; i++) {
    console.log('<br>')
    console.log(lines[i])
    console.log('<br>')
  }
  var output = document.getElementById('output')
  console.log("output=", output)
  output.innerHTML=lines[0] + '<br>' + lines[1] + '<br>' + lines[2] + '<br>' + lines[3] + '<br>' + lines[4] + '<br>' + lines[5]
}

function run() {
  createHex()
}
