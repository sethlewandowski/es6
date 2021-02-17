const colors = [ 'red', 'blue', 'green'];

// old school
console.log('old school function output')
for (let i=0; i<colors.length; i++) {
	console.log(colors[i])
}

console.log('\n')

// es6 helpers
console.log('new es6 helper function output')
colors.forEach(function(color) {
	console.log(color);
})

