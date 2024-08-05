// eslint-disable-next-line no-undef
const config = require('../config');
const kitId = 2;

const requestBody = {
    "name": "My modified kit",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]
};

test('status should be 200', async () => {
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
	expect(response.status).toBe(200);
});

test('items in kit should match what was changed', async () => {
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`);
	} catch (error) {
		console.error(error);
	}
	const data = await response.json();
    let requestIDs = [];
    //iterate through request body and add IDs to an array
    for (let i = 0; i < requestBody["productsList"].length; i++) {
        requestIDs.push(requestBody["productsList"][i]["id"])
    }

    //iterate through data and add IDs to an array
    let kitIDs = [];
    for (let i = 0; i < data["productsList"].length; i++) {
        kitIDs.push(data["productsList"][i]["id"])
    }

    //iterate through request IDs and check that the kit ID array contains each one
    for (let i = 0; i < requestIDs.length; i++) {
        expect(kitIDs).toContain(requestIDs[i]);
    }
    
});

