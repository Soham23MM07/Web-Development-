// function fetchData() {
//   return new Promise((resolve, reject) => {
//     let success = true;

//     setTimeout(() => {
//       if (success) {
//         resolve("Data Fetch sucessfully");
//       } else {
//         reject("Data is not fetch sucessfully");
//       }
//     }, 3000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((jai) => {
//     console.log(jai);
//   });

// async function getuserData() {
//   try {
//     console.log("Fetching Data....");
//     const hello = await fetchData();
//     console.log("hello  bro"); //---> this statment run only when await funcition is completed

//     console.log(hello);
//   } catch (error) {
//     console.error("Not able to fetch the data");
//   }
// }
// getuserData();

// Problem 1

/* 
Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

Use setTimeout to simulate this behaviour. */

// function simulateAsyncTask() {
//   setTimeout(() => {
//     console.log("Task Started");
//   }, 2000);
// }

// console.log(simulateAsyncTask());

// Problem 2
/* Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).

Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously. */

// function stimulateMultipleTasks(n) {
//   this.n = n;

//   setTimeout((n) => {
//     console.log(`Task ${this.n} Finished`);
//   }, 1000);
//   setTimeout(() => {
//     console.log(`Task ${this.n} Finished`);
//   }, 2000);
//   setTimeout(() => {
//     console.log(`Task ${this.n} Finished`);
//   }, 3000);
// }

// stimulateMultipleTasks(1);

// Problem 3

// Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).
// Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    let data = "Fetched data";
    callback(data);
  }, 2000);
}

let sayhello = (data) => {
  console.log(data);
};

fetchDataWithCallback(sayhello);
