# Urban Grocers API Testing
This project explores and demonstrates the use of Jest in order to test various endpoints from the Urban Grocers API. The project covers GET, PUT, DELETE, and POST requests. Each type of request has at least two tests in the suite, one to check the status of the request and another to verify the content of the response.
## Technologies and Techniques Used
This project was created using VS Code as a code editor, and is primarily written using JavaScript and the Jest framework.
## Instructions
It's important that the server for the Urban Grocers API is up and running before any further steps are taken. A code editor such as VS Code is recommended.

Once the server is running, copy the URL of the server and paste it in as the `API_URL` value in the config.js file.

In order to run the tests, use a command line interface of your choosing to navigate to the directory of the project. Then, type the command `npx jest` and press enter. The test suite should run.

Optional Steps:

The `kitId` variables in the putHandlers.test.js and the deleteHandlers.test.js files can be changed in order to test with different kits.

The `requestBody` in postHandlers.test.js and putHandlers.test.js can be changed in order to test with different items.
