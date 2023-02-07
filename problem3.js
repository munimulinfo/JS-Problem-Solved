//The job of this function is to multiply the difference of an input number
function isLGSeven(inputNum) {
	if (typeof inputNum != 'number') {
		return 'please input number'
	}
	const inputNumMainus = inputNum - 7;
	if (inputNumMainus <= 7) {
		return inputNumMainus;
	} else {
		const multiPlyinputNum = inputNumMainus * 2;
		return multiPlyinputNum;
	}
}
const num = 15;
const result = isLGSeven(num);