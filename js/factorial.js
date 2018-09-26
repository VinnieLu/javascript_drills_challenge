function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    total = 1
    for(i = n; i > 0; i--) {
      total += (total * (i - 1))
    }
    return total
  }
}