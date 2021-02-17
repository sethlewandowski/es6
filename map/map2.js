const cars = [
	{model: 'Buick', price: '$'},
	{model: 'Camaro', price: '$$$'}
];

let prices = cars.map(function(car) {
	return car.price;
});

console.log(prices)