const cars = [
	{model: 'Buick', price: '$'},
	{model: 'Camaro', price: '$$$'}
];

const prices = cars.map(function(car) {
	return car.price;
});

console.log(prices)