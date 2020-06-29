const counterOfA = (s) => {
	
	return s.split('').filter(character => {
		return character === 'a';
	});
};

const counterOfN = (s, numOfChars) => {

	let quotient = Math.floor(numOfChars/s.length);

	let remainder = numOfChars % s.length;

	return counterOfA(s).length * quotient + counterOfA(s.substr(0, 
		remainder)).length;  
};

console.log(counterOfN("asdasd", 9))