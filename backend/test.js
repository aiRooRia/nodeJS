import fs from "fs";

// fs.mkdir("teste", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Amjilttai uusgelee");
//   }
// });

// fs.writeFileSync("text.txt", "ariguunFile");

// fs.writeFile("writeFile.txt", "writeFile", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Amjilttain uuslee");
//   }
// });

// const data = fs.readFileSync("text.txt");
// console.log(data.toString());

// const secondDta = fs.readFile("writeFile.txt", (error, data) =>
//   console.log(data.toString())
// );

const data = { name: "Dada", age: 10 };
fs.writeFileSync("db.json", JSON.stringify(data));

const stringify = JSON.stringify(data);
const parse = JSON.parse(stringify);
console.log(stringify, "===", parse);
