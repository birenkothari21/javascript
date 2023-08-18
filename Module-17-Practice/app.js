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

function orderPizza(type, name) {
	// Query the pizzahub for a store
	query(`/api/pizzahub/`, function (result, error) {
		if (!error) {
			let shopId = result.shopId;

			// Get the store and query pizzas
			query(`/api/pizzahub/pizza/${shopid}`, function (result, error) {
				if (!error) {
					let pizzas = result.pizzas;

					// Find if my pizza is availavle
					let myPizza = pizzas.find((pizza) => {
						return pizza.type === type && pizza.name === name;
					});

					// Check for the free beverages
					query(
						`/api/pizzahub/beverages/${myPizza.id}`,
						function (result, error) {
							if (!error) {
								let beverage = result.id;

								// Prepare an order
								query(
									`/api/order`,
									{
										type: type,
										name: name,
										beverage: beverage,
									},
									function (result, error) {
										if (!error) {
											console.log(
												`Your order of ${type} ${name} with ${beverage} has been placed`
											);
										} else {
											console.log(
												`Bad luck, No Pizza for you today!`
											);
										}
									}
								);
							}
						}
					);
				}
			});
		}
	});
}

// Call the orderPizza method
orderPizza("veg", "margherita");

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
