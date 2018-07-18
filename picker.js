// JavaScript Document

//let restaurants = ['Nicos', 'Jimmychangas', 'Lelia', 'Grease', 'Roxys', 'Palm Sugar', 'SubWay', 'Jimmy Johns', 'Sweet Tomato', 'Anzo', 'Field of Greens']
//let restaurantsR = ['Nicos', 'Jimmychangas', 'Lelia', 'Grease', 'Roxys', 'Palm Sugar', 'SubWay', 'Jimmy Johns']

let restaurants = [
	{name: 'Nicos', approved: 'yes'},
	{name: 'Jimmychangas', approved: 'yes'},
	{name: 'Lelia', approved: 'yes'},
	{name: 'Grease', approved: 'yes'},
	{name: 'Roxys', approved: 'yes'},
	{name: 'Palm Sugar', approved: 'yes'},
	{name: 'SubWay', approved: 'yes'},
	{name: 'Jimmy Johns', approved: 'yes'},
	{name: 'Sweet Tomato', approved: 'no'},
	{name: 'Anzo', approved: 'no'},
	{name: 'Field of Greens', approved: 'no'}
]

const addRest = document.getElementById('addRest');
const addForm = document.querySelector('addForm');

function print(message) {
	let outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

function choose () {
	let isRamiro = document.getElementById('ramiro').checked;
	let number = Math.floor( Math.random() * restaurants.length);
	
	//let numberR = Math.floor( Math.random() * restaurantsR.length);
	let textMess = '';
	let restaurant = '';
	let approve = restaurants[number].approved;

	if(isRamiro === true && approve === 'yes'){
		restaurant = restaurants[number];
		textMess = '<h2>And the restaurant is...</h2>' + '<h1>' + restaurant.name + '</h1>';
	} else {
		restaurant = restaurants[number];
		textMess = '<h2>And the restaurant is...</h2>' + '<h1>' + restaurant.name + '</h1>';
	}
		console.log(approve);

	print(textMess);
}


function addNew() {
	let newRest = document.getElementById('newRestaurant').value;
	let ramiroApproved = document.getElementById('ramiroApproved').checked;
	if(ramiroApproved === true) {
		restaurants['name'] = newRest;
		restaurants['approve'] = true;
	} else {
		restaurants.name = newRest;
		restaurants.approve = false;
	}
	document.getElementById('newRestaurant').value = '';
}