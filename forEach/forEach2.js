// create array of numbers
const nums = [1,2,3,4,5];

// create variable to hold sum
let sum = 0;

// loop over array and increment the sum variable
nums.forEach(function(num) {
	sum += num;
});

// print sum
console.log(sum)