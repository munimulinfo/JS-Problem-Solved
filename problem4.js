//The task of this function is to find the bad data from an Array and count its number
function findingBadData(inputAges) {
	const badData = [];
	if (Array.isArray(inputAges)) {
		for (let inputage of inputAges) {
			if (inputage <= 0) {
				badData.push(inputage);
			}
		}
	} else {
		return "please input a Array";
	}
	const badDataNum = badData.length;
	return badDataNum;
}
const age =  [20, 30, 40, 50, -34, -4, -5, 20, -7, -45, 0];
const totalBadData = findingBadData(age);