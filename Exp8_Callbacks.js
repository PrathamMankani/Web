// callback.js
function getData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully!");
    }, 1000);
}

console.log("Start");
getData((msg) => console.log(msg));
console.log("End");

// Output: Start -> End -> Data fetched successfully!

// No libraries required
