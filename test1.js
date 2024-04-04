let superSecret = "KABOOM";
let publicWord = "BOOM";

function SayHi(name) {
  console.log(`Hi to you ${name}`);
}
module.exports = { publicWord, SayHi };

let orc = {
  name: "Orc1",
  color: "green",
};

console.log(orc.name);

// console.log(module.exports);
// // if __name__ == main{
//     SayHi("Fathiat")
// }
