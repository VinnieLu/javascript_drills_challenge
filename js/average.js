function total(numbers) {
	end = 0
	for(i = 0; i < numbers.length; i++) {
		end += numbers[i]
	}
	return end
};

function mean(numbers) {
  	return total(numbers) / numbers.length
};

function median(numbers) {
	sorted = numbers.sort()
	if (sorted.length % 2 === 0){
    return (sorted[(numbers.length / 2)] + sorted[(numbers.length / 2) - 1]) / 2
	} else if (sorted.length % 2 !== 0){
	  return sorted[Math.floor(numbers.length / 2)]
	}
}

function mode(numbers) {
		var sorted = numbers.sort();
		var sub = [];
		var tester = [];
		for(i = 0; i < sorted.length + 1; i++){
		  if (sorted[i] == tester[0]) {
		    tester.push(sorted[i])
		  } else if (sorted[i] !== tester[0]) {
		    if (tester.length > 1 && tester.length >= sub.length){
		      sub.push(tester)
		    }
		      tester = []
		      tester.push(sorted[i])
		  }
		}
		  final = []
		  for(t = 0; t < sub.length; t++) {
		    for(x = 0; x < sub[t].length; x++) {
		      if (final.indexOf(sub[t][x]) == -1) {
		        final.push(sub[t][x])
		      }
		    }
		  }
		  return final
}
