const func1 = () => {
  const name = "John";
  return new Promise((resolve, reject) => {
    if (name == "John") {
      resolve(name);
      for (let i = 0; i < 100; i++) {
        console.log("Done");
      }
    } else {
      reject("name");
    }
  });
};

const start = async () => {
  try {
    const first = await func1();
    console.log("first");
  } catch (error) {
    console.log(error);
  }
};
const start2 = () => {
  try {
    const first = func1();
    console.log("first");
  } catch (err) {
    console.log(err);
  }
};
start();
// func1()
//   .then((name) => {
//     console.log("Correct", "it is", name);
//   })
//   .catch((name) => {
//     console.log("Incorrect", "it is", name);
//   });
