import isPrime from './isPrime'

// get random odd number between 3 and 99
function getNumber () {
  return Math.floor(Math.random() * 48) * 2 + 3
}

window.onload = function () {
  const score = document.getElementById('score')
  const display = document.getElementById('display')
  const answerYes = document.getElementById('answer-yes')
  const answerNo = document.getElementById('answer-no')
  const reset = document.getElementById('reset')

  let curValue = getNumber()
  let curScore = 0
  let maxScore = 0

  function onAnswer (answer) {
    if (answer === isPrime(curValue)) {
      curScore += 1
      if (curScore > maxScore) {
        maxScore = curScore
      }
    } else {
      curScore = 0
    }

    score.textContent = `${curScore}/${maxScore}`
    curValue = getNumber()
    display.textContent = `${curValue}`
  }

  answerYes.onclick = () => onAnswer(true)
  answerNo.onclick = () => onAnswer(false)

  reset.onclick = function () {
    curScore = maxScore = 0
    score.textContent = '0/0'
  }

  display.textContent = `${curValue}`
}
