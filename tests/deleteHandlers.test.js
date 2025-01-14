// eslint-disable-next-line no-undef
const config = require('../config');
const kitId = 7;

test('response status should be 200', async () => {
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
	
	expect(response.status).toBe(200);
});

test('deleted kit should no longer exist', async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`)
	} catch (error) {
		console.error(error);
	}
	expect(response.status).toBe(404);

})
