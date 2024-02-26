import express from "express";
import cors from "cors";
import fs from "fs";

let arr = [];
try {
  const data = fs.readFileSync("db.json");
  arr = JSON.parse(data);
} catch (error) {
  console.log("Error", error);
}
const port = 3010;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send(arr);
});

app.post("/", (request, response) => {
  arr.push(request.body);
  fs.writeFileSync("db.json", JSON.stringify(arr));
  response.send(arr);
});

app.delete("/", (request, response) => {
  const { id } = request.body;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      arr.splice(i, 1);
      break;
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// import express from "express";
// import cors from "cors";

// const data = [
//   {
//     name: "Ariguun",
//     age: 26,
//     lastName: "Bold",
//     id: 1,
//   },
// ];
// const port = 3010;
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/user", (request, response) => {
//   response.send(data);
// });

// app.post("/user", (request, response) => {
//   console.log(request.body);
//   // data.push({
//   //   name: "Boorchi",
//   //   age: 22,
//   //   lastName: "Bold",
//   //   id: 2,
//   // });
//   console.log(data);
//   response.send(data);
// });

// app.delete("/", (request, response) => {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].id === 1) {
//       data.splice(data[i].id === 1);
//     }
//   }
//   response.send(data);
// });

// app.listen(port, () => {
//   console.log(`Create new port http://localhost:${port}`);
// });
