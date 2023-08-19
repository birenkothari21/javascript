// const button = document.querySelector("button");

// function getLocation(cbSuccess, cbError) {
// 	navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
// }

// function s(flag) {
// 	console.log("Your Current Geo Location Data : ", flag);
// }

// function e(error) {
// 	console.log("Sorry, Something Went Wrong! ", error);
// }

// button.addEventListener("click", getLocation.bind(this, s, e));

/* 
	// setTimeout() inside a function... & still first it runs...

	function timer() {
		setTimeout(() => {
			console.log("Time Out!");
		}, 10000);
	}

	
	timer();
	console.log("Collecting papers process starts...");
 */

// Promse practicing...
/* 
	function greeting(msg) {
		let promise = new Promise(function (resolve, reject) {
			resolve(`Hi Everyone! ${msg}! How Are U All ?`);
		});

		return promise;
	}

	function displayGreetMsg() {
		const greetMsg = prompt("Enter Greeting Message : ").toString();
		let getGreetMsg = greeting(greetMsg);

		getGreetMsg.then((value) => {
			console.log(value);
		});
	}

	displayGreetMsg();
 */
/* 
	function getPromise(URL) {
		let promise = new Promise(function (resolve, reject) {
			let req = new XMLHttpRequest();
			req.open("GET", URL);
			req.onload = function () {
				if (req.status == 200) {
					resolve(req.response);
				} else {
					reject("There is an Error!");
				}
			};
			req.send();
		});
		return promise;
	} 
*/

const friends = [
	{
		id: 0,
		name: "Sagar Mer",
		age: 22,
		address: "Dhoraji",
	},
	{
		id: 1,
		name: "Mihir Nirmal",
		age: 23,
		address: "Jam-Khambhalia",
	},
	{
		id: 2,
		name: "Naman Chauhan",
		age: 22,
		address: "Rajkot",
	},
	{
		id: 3,
		name: "Harsh Vadher",
		age: 23,
		address: "Rajkot",
	},
	{
		id: 4,
		name: "Bhavya Kamdar",
		age: 24,
		address: "Jamshedpur",
	},
	{
		id: 5,
		name: "Vivek Doshi",
		age: 23,
		address: "Savarkundla",
	},
];

function getFriendId(friendId) {
	let promise = new Promise((resolve, reject) => {
		friends.forEach((friend) => {
			if (friend.hasOwnProperty("id")) {
				if (friend.id === friendId) {
					resolve(friend);
				}
			}
		});

		reject(`Friend is Not Exsist In FriendList Whose Id is ${friendId}`);
	});

	return promise;
}

function findFriendById(friendId) {
	let promise = getFriendId(friendId);

	promise
		.then((value) => {
			console.log(value);
		})
		.catch((error) => {
			console.log(error);
		});
}

const friendId = parseInt(prompt("Enter Friend Id : "));

findFriendById(friendId);
