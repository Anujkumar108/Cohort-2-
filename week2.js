1) ECMA SCRIPT
2) PROMISES
3) EXPRESS SERVER
4) NODEMON
5) RESPONSE OBJECT
6) PORT AND ENVIRONMENT VARIABLE
7) PARSING BODY
8) PARSING HEADER
9) PARSING QUERIES
10) POSTMAN
11) FILTER, MAP, ARROW FUNCTION
12) BASH AND TERMINAL COMMAND
13) GIT AND GITHUB

js :- 
 
1) ECMAScript is not a programming language 
itself but a specification for scripting languages.
JavaScript, JScript (Microsoft's version), and ActionScript (Adobe) are implementations of the ECMAScript standard.

ECMAScript is the backbone of JavaScript's evolution, 
introducing features that make the language more powerful, efficient, and developer-friendly. 
Understanding ECMAScript standards is crucial for modern JavaScript development.

 V8 ENGINE: 
It is a open source js engine that is responsible for compiling js code into 
native machine learning code before executing

2) Set time out and try catch :- 
settime out : this function delays the execution of a callback fxn 
by a specified time 
Ex. delayFunction is called after a 2 second delay 

tryCatch :- this block is used to handle exception if an error occurs in the try block,
the catch block will handle it. here we simulate an error with throw new Error

Ex. async function fetchUserData() {
    try {
        const response = await
        fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json(); //parse the json data
        console.log("User data", data); //  log the fetched user data

    } catch (error) {
        console.error("Error fetching user data", error.message); // handles any erros that occur
    }
} 

fetchUserData();

function delayedFunction() {
    console.log("This is a delayed function");
}

// use timeout to delay the execution of a function

setTimeout(() => {
  delayedFunction();
}, 2000); // delay for 2 seconds

console.log("waiting for delayed function to execute");

3) Promises and async await :-
// Promises are used to handle asynchronous operations in JavaScript.
 They are easy to manage when dealing with multiple asynchronous operations
 where callbacks can create callback hell leading to unmanageable code.

// hum use karte hai promises ko kisi asynchronus call ko implement karne ke liye, jo return mai object deta hai

let myPromise = new Promise((resolve, reject) => {
    let success = true; // simulating a condition for success or fauliure

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});    

 promise are used to handle asynchronous operations in javascript
such as fetching data from a server, reading a file, or executing a timer.

2) promise has 3 states:-
- Pending: the initial state, before the promise is resolved or rejected //  koi call kar ra hu woh pending mai chali gyi 
- Fulfilled: the opertion was completed successfully and the promise has a resulting value  // call successfull ho gyi
- Rejected:  There was an error during the operation and the promise has a reason for the failure // call fail ho gyi

3) Chaining :- promises support chaining through the then method, which allows you to execute multiple asynchronous operations in a specific order.

4)Error handling :- promise have built in error handling through the catch method,
making it easier to manage and propogate errors in asynchronus code. 

why do we need promises ?
1) Avoiding Callback hell
2) Sequential Execution of Asyncronous CODE.


4) EXPRESS server:-
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

HTTP: a protocol that defines for machine to communicate specially for website 
it is the most common way for your website frontend to take to its backend

Express js is an open source web application framework for Node.js, 
designed to simplify the development of web applications

- Get: use to get the data from the database.
- Post: often used for creating or updating resources
- other methods (Put,Delete) liked for various purposes such as updating or 
deleting resources.
- req and response objects
Request(req) - Represents the incoming HTTP request from the client, Contains
information about the request such as parameters headers or body
Response(res) - Represents the outgoing HTTP response to be sent back to the 
client. Allows you to send data, set headers and more.

- **GET:** Use when you want to retrieve data from the server, and the request has no side effects. It's suitable for safe and idempotent operations.
- **POST:** Use when you want to submit data to the server, especially when the operation has side effects (e.g., creating a new resource on the server). It's suitable for non-idempotent operations.

Port: The server listens on a specefic port (eg. 3000) for incoming http requests.


//server.js
// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, this is the root/main route!');
});

// Define another route for "/api" with JSON response
app.get('/api', (req, res) => {
  res.json({ message: 'This is the API route.' });
});

// Define a route with URL parameters
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

5) NODEMON:-
Nodemon is utility that monitors for any  changes in your source code and automatically 
restarts the server when changes are detected.

To install NODEMON: 
npm install -g nodemon 

To install locally in project: 
npm install nodemon 

Use Nodemon to Start Your Server:
nodemon server.js

6) Response Object 
In an Express js appications you send a response back to client using the res (response) ojbect the 
res object provides various methods to send different types of responses such as text, JSON,
HTML and more.

1) Sending Plain Text:- 

Use the res.send method to send plain text.

app.get('/', (req, res) => {
  res.send('Hello, this is a plain text response!');
});

2) Sending JSON:- 

app.get('/api/data', (req, res) => {
  const data = { message: 'This is a JSON response.' };
  res.json(data);
});

3) Sending HTML:-

Use the res.send method to send HTML content.

app.get('/html', (req, res) => {
  const htmlContent = '<h1>This is an HTML response</h1>';
  res.send(htmlContent);
});

4) Redirecting 
Use the res.redirect method to redirect the client to a different URL.


app.get('/redirect', (req, res) => {
  res.redirect('/new-location');
});

5) Sending Status Codes:-
Use the res.status method to set the HTTP status code.


app.get('/not-found', (req, res) => {
  res.status(404).send('Page not found');
});

6) Sending Files:-
Use the res.sendFile method to send a file as a response.

const path = require('path');

app.get('/file', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'example.txt');
  res.sendFile(filePath);
});

7) Setting Headers:- 
Use the res.set method to set response headers.

javascriptCopy code
app.get('/custom-header', (req, res) => {
  res.set('X-Custom-Header', 'Custom Header Value');
  res.send('Response with a custom header');
});

7) How to serve different routes :-

Routes are defined using HTTP methods 
(such as GET, POST, PUT, DELETE, etc.) 
and specify a callback function that gets executed 
when a request matches the specified URL and method.

const express = require('express');
const app = express();
const port = 3000;

// get route
app.get('/', (req, res) => {
  res.send('Hello from GET route!');
});

// post route
app.post('/add', (req, res) => {
  res.send('Hello from POST route!');
});

// PUT route - updation
app.put('/put/:id', (req, res) => {
  res.send('Hello from PUT route!');
});

//DELETE route 
app.delete('/delete/:id', (req, res) => {
  res.send('Hello from DELETE route!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

8) Understanding ENV (environment variables):-

-Install dotenv package 

Install the dotenv package using npm. 
This package allows you to load environment variables from a file.

npm install dotenv

- Create a .env file

Create a file named .env in the root of your project. 
This file will contain your environment variables. 
Add a variable for the port, for example:

PORT=3000

- Load Environment Variables in Your Express App:

In your main Express application file (e.g., app.js or index.js), 
load the environment variables using dotenv. 
Add the following lines at the top of your file:

require('dotenv').config();

- Use the PORT Environment Variable:

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rest of your Express app code...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

- run your Express app 
node app.js

10)  parsing Body 
how to parse body in a POST  request 

To parse the body of a POST request in Express, 
you can use middleware to handle different types of data formats 
such as JSON or form data. 
Express provides built-in middleware for parsing JSON (express.json()) and form data (express.urlencoded()).

-> const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// POST route to handle form data
app.post('/form', (req, res) => {
  const formData = req.body;
  res.json({ receivedData: formData });
});

// POST route to handle JSON data
app.post('/json', (req, res) => {
  const jsonData = req.body;
  res.json({ receivedData: jsonData });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

11) How to parse headers in a GET request

const express = require('express');
const app = express();
const port = 3000;

app.get('/get-info', (req, res) => {
  // Access headers from req.headers
  const userAgent = req.headers['user-agent'];
  const acceptLanguage = req.headers['accept-language'];

  res.json({
    userAgent,
    acceptLanguage,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

12) How to parse query parameters

const express = require('express');
const app = express();
const port = 3000;

app.get('/api/user', (req, res) => {
  // Access query parameters from req.query
  const userId = req.query.id;
  const name = req.query.name;

  // Process the parameters as needed
  const user = {
    id: userId,
    name: name,
  };

  // Send a JSON response with the parsed parameters
  res.json({ user });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

13) How to send JSON response

const express = require('express');
const app = express();
const port = 3000;

app.get('/get-json', (req, res) => {
  // Create an object to be sent as JSON
  const responseData = {
    message: 'This is a JSON response',
    data: {
      key1: 'value1',
      key2: 'value2',
    },
  };

  // Send the JSON response
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

14) POSTMAN:-
Postman is a popular API development and testing tool 
that allows you to make HTTP requests to a server and view the responses. 
It's commonly used for testing APIs during development.

*/
