WEEK 1 (javascript)

1) compiled vs interpreted
2) Let var and const 
3) Data Types 
4) Operators 
5)Function
6) IF Else 
7) Loops 
8) Maps
9) Filter
10) find 
11) Sort 
12) Callback
13) Complex types: (OBJECT , ARRAY OF OBJECT , OBJECT IN OBJECT)
14) Properties Of JS
15) ASYNC AWAIT 

 1) Compiled Language:
Definition:

A compiled language converts the entire source code into machine code (binary code) before execution.
The compiler checks for errors and optimizes the code during the compilation process.
Example languages: C, C++, Java (bytecode compilation).
Execution:

The compiled code is executed directly by the machine, making it generally faster at runtime.
Compilation is a one-time process, resulting in an executable file.

Interpreted Language:
Definition:

An interpreted language processes the source code line by line or statement by statement at runtime.
Execution happens immediately, but it may be slower since interpretation adds overhead.
Execution:

The interpreter reads and executes the code directly without producing a standalone machine code file.
Errors are detected during runtime, making debugging potentially slower.
Example languages: JavaScript, Python, Ruby.

2) Let , VAR AND CONST:

we can access let in the block scope, var in the function scope, and const in the block scope.

3) DATATYPES :

let number = 42; // number
let string = 'Hello World'; // string  
let isActive = false; // Boolean
let numbers = [1,2,3]; // ArrayCopy

4) OPERATORS:

let num = 10 + 5; // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = true && flase; // Logical operatorCopy

5) FUNCTIONS:

function greet(name) {
    return 'Hello ' + name;
}
    //function call
    let message = greet('John'); // "hello, John"

6)  IF ELSE:
 
if(age >= 30) {
    console.log("you are an adult");
} else {
    console.log("you are a child");
}

7) LOOPS: 

//for loop 
for(let i = 0; i < 5; i++) {
    console.log(i);   // Outputs 0 to 4
}

//while loop - the while loop is used when the number of iterations is not known in advance, 
and the loop continues as long as the specefied condition is true.

let j = 0;
while(j < 5) {
    console.log(j); //Outputs 0 to 4
    j++;
}

// do while loop:
the do while loops is similar to the while loop,
but it guarantees that the loop will execute at least once, 
even if the condition is false initially.

let i = 0; 
do {
    console.log(i); // Outputs 0
    i++;
} while(i < 5);

8) Map function :
the map function creates a new array by applying a provided function to each element in the
original array.

const numbers = [1, 2, 3, 4, 5];

// using map to double each other 
const doubleNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(doubleNumbers); // [2, 4, 6, 8, 10]

9) Filter function:
The filter function creates a new array with all elements that pass the test implemented by the 
provided function.

const numbers = [1, 2, 3, 4, 5];

// using filter to get only even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4]

10) find Function:
The find function returns the first element in the array that satisfies the provided testing function.

const users = [
    { id: 1, name: 'John'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'Alice'}
];

// thing find to get the user with the name 'Bob'
const user = users.find(user => user.name === 'Bob');

console.log(user); // { id: 2, name: 'Bob' }

11) Sort function:
the sort function sorts the elements of an array in place
and returns the sorted array.
By default, sort converts elements to string and sorts them in ascending order
based on their UTF-16 code units.

const numbers = [5,2,9,1,7];

//using sort to order the numbers in ascending order
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers); // [1, 2, 5, 7, 9]

12) callbacks in js 
A callback is a function that is passed as an arguement to another function
and is executed after some operation has been completed.

function fetchData(callback) {
 setTimeout(() => {
    let data = "Sample Data"; 
     callback(data); // executes the callback function with data as its arguement
   }, 1000);
}

function processData(data) {
    console.log("Processing:", + data);
}

fetchData(processData);

13) complex types :

objects is a collection of key-value-pairs. where each key is a string and each
value can be any valid javascript data type, including another object.

let user = {
  name: "anuj",
  age: 20,
}

console.log(user.name); // "anuj"

14) Arrays 
let you group data together 

const users = ["harkirat", "anuj", "gagan"];
const totalUsers = users.length;
const firstUser = users[0];

15) Array of Objects 
We can have more complex objects, for example an array of objects.

const users = [
  {
    name: "anuj",
    age: 21
  },
  {
    name: "raman",
    age: 22
  }
];

const user1 = users[0];
const user1age = users[0].age;

console.log(user1); // { name: "anuj", age: 21 }
console.log(user1age); // 21

16) Object of Objects 
We can have an even more complex object (object of objects).

const user1 = {
    name: "anuj",
    age: 19,
    address: {
        city: "delhi",
        country: "india",
        address: "1122 DLF"
    }
}

const city = user1.address.city;

console.log(user1);

17) properties of js 
Every language comes with its unique set of features.
js has the following: 

interpreted: 
js is an interpreted language, meaning its executed line by line at the runtime by the js Engine
in the browser or server environment. rather than being compiled into machine code

js used V8 engine.
js is single threaded.
js is garbage collected.


18) dynmaic typing 
varibales in js are not bound to a specefic data type, types are determined at runtime
and can change as the program executes.

19) async and await in JS 
async and await are keywords in js that simplify working with 
asynchronus code, making it look more like synchronous code.
this helps in writing more readable and maintainable code.

async keyword: 

1) the async keyword is used to declare an asynchrnous function.
2) An async function always returns a promise. if the function returns a value,
js automatically wraps it in a resolved promise.

await keyword:

1) The await keyword is used to pause the execution of an async function 
until the promise is resolved.
2) It can only be used inside an async function.
3) await makes Js wait until the promise settles and returns it result.

20) //Simulating an asynchronus data fetch operation

//simulating an asynchronus data fetch operation
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sample Data");
            // reject("Failed to fetch data"); // uncomment this line to simulate an error 

        }, 2000); // Simulating a 2 second delay
    });
}

//using async/await to fetch and process data
async function getData() {
    console.log("Fetching data...");

try {
    // Await the fetch function to resolve its promise 
    const data = await fetchData();
    console.log("Data received: " +  data);
} catch (error) {
    // Handle any errors that occur during the fetch 
    console.log("Error: " + error);
   }
}

//calling the async function
getData();
