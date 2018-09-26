function longestString(strings) {
  if (strings.length === 0) {
    return null
  } else {
    final = []
    for(i = 0; i < strings.length; i++) {
      if (strings[i].length > final.length) {
        final = strings[i]
      }
    }
  }
  if (final.length === 0) {
    return ""
  } else {
    return final
  }
}