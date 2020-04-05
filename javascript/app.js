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
    console.log('value=' + value + '\nside=' + side)
  }
  var results = ''
  results = '  ' + side + '   ' + value.toString()
  if (value % 2 === 0) {
    lines.push(results + '   -------   -------')
    sequence.push(0)
  } else {
    lines.push(results + '   -----------------')
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
    console.log('\n')
    console.log(lines[i])
    console.log('\n')
  }
  send('\n```' + lines[0] + '\n' + lines[1] + '\n' + lines[2] + '\n' + lines[3] + '\n' + lines[4] + '\n' + lines[5] + '```')
}

createHex()
