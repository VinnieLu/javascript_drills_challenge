function GuessingGame(answer) {
  this.answer = answer;
  this.solved = false
}

GuessingGame.prototype.guess = function(guess) {
  if (guess < this.answer) {
    this.solved = false
    return "low"
  } else if (guess > this.answer) {
    this.solved = false
    return "high"
  } else {
    this.solved = true
    return "correct"
  }
}

GuessingGame.prototype.isSolved = function() {
  return this.solved
}