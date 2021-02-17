// don't mutate data

const numbers = [1,2,3];

const doubledNumbers = [];

numbers.map(function(number){
	doubledNumbers.push(number*2)
});

console.log(doubledNumbers);


// if we don't return a value then we get a null tripleNubmers array
// most common mistake is to forget to return
const tripledNumbers = numbers.map(function(number){
	return number*3;
});

console.log(tripledNumbers);