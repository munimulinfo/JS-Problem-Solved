//It is a mind game to calculate the correct Answre
function mindGame(number) {
	if (typeof number != 'number') {
		return 'please input number'
	} else if (number <= 0) {
		return 'pls input positive number or > 0'
	}
	const inputNumber = number * 3 + 10;
	let result = inputNumber / 2;
	result = result - 5;
	return result;
}
const number = 5;
const fainalResult = mindGame(number);