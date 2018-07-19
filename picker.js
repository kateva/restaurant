// JavaScript Document

//let restaurants = ['Nicos', 'Jimmychangas', 'Lelia', 'Grease', 'Roxys', 'Palm Sugar', 'SubWay', 'Jimmy Johns', 'Sweet Tomato', 'Anzo', 'Field of Greens']
//let restaurantsR = ['Nicos', 'Jimmychangas', 'Lelia', 'Grease', 'Roxys', 'Palm Sugar', 'SubWay', 'Jimmy Johns']

let restaurants = [
	{name: 'Nicos', approved: true},
	{name: 'Jimmychangas', approved: true},
	{name: 'Lelia', approved: true},
	{name: 'Grease', approved: true},
	{name: 'Roxys', approved: true},
	{name: 'Palm Sugar', approved: true},
	{name: 'SubWay', approved: true},
	{name: 'Jimmy Johns', approved: true},
	{name: 'Sweet Tomato', approved: false},
	{name: 'Anzo', approved: false},
	{name: 'Field of Greens', approved: false}
]

const addRest = document.getElementById('addRest');
const addForm = document.querySelector('addForm');

function print(message) {
	let outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

function choose () {
	
	let isRamiro = document.getElementById('ramiro').checked;
	
	while(true){
		let number = Math.floor( Math.random() * restaurants.length);

		//let numberR = Math.floor( Math.random() * restaurantsR.length);
		var textMess = '';
		let restaurant = '';
		let approve = restaurants[number].approved;

		if(isRamiro === false || restaurants[number].approved){
			restaurant = restaurants[number];
			textMess = '<h2>And the restaurant is...</h2>' + '<h1>' + restaurant.name + '</h1>';
			break;
			}

	} //while
	print(textMess);
}


function addNew() {
	var newRestaurant = {};
	newRestaurant.name = document.getElementById('newRestaurant').value;
	newRestaurant.approved = document.getElementById('ramiroApproved').checked;
	restaurants.push(newRestaurant);
	
	document.getElementById('newRestaurant').value = '';
}
