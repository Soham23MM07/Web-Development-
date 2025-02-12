// Promise is object that provide a robust or cleaner way  to handle asynchornous operation compared to traditional callback based methods

function fetchData() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve("Data fetch sucessfully");
      } else {
        reject("Data is not fetch sucessfully");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    let bhai = data;
    return bhai;
  })
  .then((hat) => {
    console.log(hat);
  })
  .catch((tata) => {
    let based = tata;
    console.log(tata);
  });

// uses of promise is for
// error handling
// avoid callback hell
// chaning aynschronous operation
