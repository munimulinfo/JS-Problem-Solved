//The job of this function is to calculate the number of a string to say whether the string is even or odd
function evenOdd(inputString) {
	if (typeof inputString != 'string') {
		return 'please input string';
	} else if (inputString.length % 2 === 0) {
		return 'even';
	} else {
		return 'odd';
	}
}
const name = 'Munimul Islam Nissan';
const findEvenOdd = evenOdd(name);