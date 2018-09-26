function pad(array, minSize, value) {
	if (array.length >= minSize){
		return array;
	} else if (array.length < minSize){
		var finalArray = [];
		for(i = 0; i < (array.length); i++){
		  console.log(i)
			finalArray.push(array[i]);
		} for(i = 0; i < (minSize - array.length); i++){
			finalArray.push(value);
		}
	}
	return finalArray
}