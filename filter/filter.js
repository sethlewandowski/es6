
const foods = [
	{name: 'banana', qty: 40},
	{name: 'carrot', qty: 220},
	{name: 'beer', qty: 30},
	{name: 'wine', qty: 99}
];

const filteredArr = foods.filter(function(item){
	return item.qty > 40
})

console.log(filteredArr)

