function FetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("FetchData");
    }, 2000);
  });
}

function Fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fetch");
    }, 3000);
  });
}

async function getsomething() {
  try {
    console.log("Fetching the data....");
    // let hello = await FetchData();
    // let yello = await Fetch();

    const [hello, yello] = await Promise.all([FetchData(), Fetch()]);
    console.log(hello);
    console.log(yello);
  } catch (error) {
    console.error("Hello", error);
  }
}

getsomething();
