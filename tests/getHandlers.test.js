// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
	let response;
	let actualStatus;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	
	
	
	expect(actualStatus).toBe(200);
});

test('list of couriers should be greater than 0', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	expect(data.length).toBeGreaterThan(0);
});

test('the starting work hours should be before the ending work hours for all couriers', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
	const results = [];
	for (let i = 0; i < data.length; i++) {
		const startHours = data[i]["workingHours"]["start"];
		const endHours = data[i]["workingHours"]["end"];
		results.push(startHours < endHours);
	}

	expect(results).not.toContain(false);
})



