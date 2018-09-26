function timesTable(number) {
  row = ""
  for(t = 1; t <= number; t++) {
    for (x = 1; x <= number; x++) {
      row += (t * x) + "   "
    }
    row += "\n"
  }
  return row
}