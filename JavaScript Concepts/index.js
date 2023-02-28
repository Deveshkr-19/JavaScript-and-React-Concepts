// Traditional function
var func = function (x, y) {
	return console.log(x + y);
};
// Arrow function
const arrow = (x, y) => console.log(x + y);

func(1, 5);
arrow(2, 8);

// Spread(...) Operator
const nums = [7, 5];
arrow(...nums);

// Callback function
const displayer = (value) => {
	console.log(value);
};
const add = (x, y, callbackFunc) => {
	const sum = x + y;
	callbackFunc(sum);
};

add(4, 9, displayer);

// Promises
var promise = new Promise(function (resolve, reject) {
	const x = 50;
	const y = 5;
	if (x === y * 10) {
		resolve();
	} else {
		reject();
	}
});

promise
	.then(function () {
		console.log("Promise resolved successfully");
	})
	.catch(function () {
		console.log("Promise rejected");
	});

// Async/Await
const getData = () => {
	const dataPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
	return dataPromise.then(() => {
		return {
			name: "Devesh",
			age: 23,
		};
	});
};
const displayData = async () => {
	const data = await getData();
	console.log(data);
};
displayData();

// Closure function
const displayFunc = (a, b) => {
	console.log(`The two numbers: ${a}, ${b}`);
	// return () => {
	// 	return a + b;
	// };
	return {
		closureAdd: () => a + b,
		closureMul: () => a * b,
	};
};
const closureFunc = displayFunc(3, 7);
console.log(closureFunc.closureAdd());
console.log(closureFunc.closureMul());

// Iterators and iterables
const userName = "Naina";
const numArr = [5, 7, 1, 13];
const loopDisplayer = (iterable) => {
	for (val of iterable) {
		console.log(val);
	}
};
loopDisplayer(userName);
loopDisplayer(numArr);

// Array methods
// toString
const names = ["Amit", "Devesh", "Prakhar", "Mukul"];
console.log(names.toString());

// join
console.log(names.join(" // "));

// push and pop
console.log(names.push("Ayush"));
console.log(names);
console.log(names.pop());
console.log(names);

// shift and unshift
console.log(names.shift());
console.log(names);
console.log(names.unshift("Amit"));
console.log(names);
