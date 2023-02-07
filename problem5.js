//You have to figure out how many diamonds you will get in total by combining the gems of all friends.
function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
	if (typeof firstFriend === 'string' || typeof secondFriend === 'string' || typeof thirdFriend === 'string') {
		return 'please input a number';
	} else if (firstFriend < 0 || secondFriend < 0 || thirdFriend < 0) {
		return 'please input a positive number';
	} else if (arguments.length > arguments.callee.length) {
		return 'please there value input';
	}
	const firstFnd = firstFriend * 21;
	const secondFnd = secondFriend * 32;
	const thirdFnd = thirdFriend * 43;
	const totalFriendGems = firstFnd + secondFnd + thirdFnd;
	if (totalFriendGems > 2000) {
		const getDiamond = totalFriendGems - 2000;
		return getDiamond;
	} else if (totalFriendGems < 1000) {
		return totalFriendGems;
	} else {
		return totalFriendGems;
	}
}
const firstFriendGems = 100;
const secondFriendGems = 5;
const thirdFriendGems = 1;
const totalDiamond = gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems);