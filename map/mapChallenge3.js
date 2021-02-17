
const paints = [ {color: 'red'}, {color: 'blue'}, {color: 'pink'} ];


function pluck(array, property) {
	// build new array of colors
	const answer = array.map(function(obj){
		return obj[property];
	})
  //return that array to be assigned to const
  return answer
}

const newArr = pluck(paints, 'color')
console.log(newArr)
