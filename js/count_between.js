function countBetween(numbers, lower, upper) {
  if (numbers.length === 0) {
    return 0
  } else if (upper < lower) {
  	return 0
  } else {
    var final = []
    final.push(lower)
    for(i = 0; i < numbers.length; i++) {
      if ((numbers[i] >= lower) && (numbers[i] <= upper)) {
        final.push(numbers[i])
      }
    }
    final.push(upper)
    return final.length - 2
  }
}
