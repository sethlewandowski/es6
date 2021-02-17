
const foods = [
	{name: 'banana', qty: 40, price: 1},
	{name: 'carrot', qty: 0, price: 1.2},
	{name: 'beer', qty: 30, price: 8},
	{name: 'wine', qty: 99, price: 12}
];


// show me foods that cost less than $10 and have in stock
const filteredArr = foods.filter(function(item){
	return item.price < 10 && item.qty > 0
})

console.log(filteredArr)