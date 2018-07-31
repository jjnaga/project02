// Model:
// {
// 	header: {
// 		name
// 	}
// 	image: it"s either gonna be "image.jpg", or the actual image? Not to sure.
// 	specs: {
// 		horsepower
// 		torque
// 		weight
// 		0-60
// 		0-100
// 		quarter mile
// 	}
// 	config: {
// 		exterior:
// 		interior:
// 		performance:
// 	}
// 	// I"m thinking we make this pictures, with links. So like rim - picture
// 	// -link to buy
// 	aftermarket:
// 		rim:
// 		exhuast:
// 		performance:
// }

//7/31/18

const API = {
	companies: [
		"Acura",
		"Audi",
		"BMW",
		"Cadillac",
		"Chevrolet",
		"Chrysler",
		"Dodge",
		"Ferrari",
		"Ford",
		"GMC",
		"Honda",
		"Hyundai",
		"Infiniti",
		"Jaguar",
		"Jeep",
		"Kia",
		"Land Rover",
		"Lexus",
		"Mazda",
		"Mercedes-Benz",
		"Mitsubishi",
		"Nissan",
		"Porsche",
		"Subaru",
		"Tesla",
		"Toyota",
		"Volkswagen",
	],
	header: {
		name: "BMW M4",
	},
	image: `images/m4.jpg`,
	specs: {
		horsepower: 404,
		torque: 555,
		weight: 3132,
		zeroToSixty: 4.3,
		zeroToHundred: 5.5,
		quarterMile: 12.3,
	},
};

export default API;
