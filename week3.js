node js :
Runtime Environment: Provides a runtime environment for executing JavaScript on the server-side.
Server-Side Programming: Allows developers to write server-side code in JavaScript.
Low-Level: Provides a low-level API for building web applications.
Scalable: Enables building scalable web applications.
Used for: Real-time web applications, API development, and server-side programming.
 
Express.js
Web Framework: A web framework built on top of Node.js.
High-Level: Provides a high-level API for building web applications.
Easy to Use: Simplifies the process of building web applications.
Flexible: Allows developers to build web applications with a flexible and modular architecture.
Used for: Building web applications, RESTful APIs, and web services.
 
Key Differences
Purpose: Node.js is a runtime environment, while Express.js is a web framework.
Level of Abstraction: Node.js provides a low-level API, while Express.js provides a high-level API.
Complexity: Node.js requires more manual configuration, while Express.js simplifies the process of building web application

 week 3.1 -

1)introduction
2) MONGO DB
3) POSTGRES INSTALLATION
4) MIDDLEWARE AND GLOBAL CATCHES
5) Res.send() and res.join()
6) MIDDLEWARE AND REQUEST BODY
7) 3 WAYS OF SENDING INPUT TO RESPONSE
8) INPUT VALIDATION

1) intro

-> pulled out V8 + ADD functionality and make node js.

some-one pulled out the V8 engine to run the javascript code add some
functionality to it and make it node js 

-> what is node js ?
node js is a runtime that is used to execute a javascript code in the backend
it us used to create clis game, HTTP server, video players

-> How HTTP servers are created ?

famous framework are :
> express
> nextjs

1) install Node.js and Express First you need to have Node js installed. Then, 
install Express using npm: 

npm install express

2) Create the HTTP Server : Create a file named server.js and add the following code:

const express = require('express');
const app = express();

//Define a route for the root url 
app.get("/",(req, res) => {
    res.send("Hello, Express!");
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

Steps to run the code:

1) Save the code : Save the above code in a file named server.js
2) Run the Server: In your terminal, navigate to the directory where server.js is located and run:

node server.js 

3) Access the Server: open your browser and navigate to http://localhost:3000. You should see
the message "Hello, Express!" displayed in your browser.


2) MONGO DB 
~ mongo db signing and URL
~ mongo db compass and connect

Mongo db is a powerful and versatile NoSQL database that revolutionizes data management with
its flexible and scalable design. Here's a breakdown of its key features: 

-Schemeless Design
-Scalability

Express,JWT,Mongoose :-

-Express: Creates an HTTP server to handle requests and responses.
-Connection to databaase 

JWT (json web tokens) :- 
-allow the creation and verification of JSON Web Tokens (JWT).

Mongoose :- 
An object data modeling (ODM) library for MongoDB and Node.js, it provides a 
structured way to interact with databases

In summary, while express sets up the server, JWT helps with user authentication and 
Mongoose facilities interaction with the mongo DB database
these libraries form a robust backend infrastructure for handling HTTP requests,
securing routes and managing data in the database.

3) POSTGRES INSTALLATION 

postgres SQL (Often abbrevation as Postgres) is an open-source, relational database management
system (RDBMS) that's known for its reliability, flexibility and support of open technical
standards.

Neon is a serverless open-source, and scalable PostgresSQL database that seprates 
storage and compute to help developers build reliable and scalable applications.

4) MIDDLEWARE AND GLOBAL CATCHES
MIDDLEWARE -> prechecks from the core application logic.

In the context of web frameworks like Express.JS is a function that has access to the request object
(req), the response object (res) and the next function in the application's request-response 
cycle. Middleware functions can perform various tasks, such as modifying the request or response 
objects, ending the request- response cycle or passing control to the next 
middleware function in the stack.

- next keyword : 
In middleware functions in Express, next is a callback function 
that is used to pass control to the next middleware function 
in the stack. When you call next(), it tells Express to move 
to the next middleware in line. If next() is not called within a middleware function, 
the request-response cycle stops, and the client receives no response.

next() keyword is used to pass control to the next middleware function in the stack
 
ex. of next 
const express = require("express");

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log('This middleware runs first.');
    next(); // Move to the next middleware
  });
  
  app.use((req, res) => {
    console.log('This middleware runs second.');
    res.send('Response sent from the second middleware.');
  });

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});  

const express = require("express");
const app = express();

const port = 3000;


app.use((req, res, next) => {
    console.log("this middleware runs first");
    next();
});

app.use((req, res) => {
    console.log('this middleware runs second.');
    res.send("response sent from the second middleware");
});

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});


