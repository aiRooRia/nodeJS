import express from "express";
import cors from "cors";

const data = [
  {
    name: "Ariguun",
    age: 26,
    lastName: "Bold",
    id: 1,
  },
];

const secondData = {
  name: "Boorchi",
  age: 22,
  lastName: "Bold",
  id: 2,
};

const port = 3010;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  data.push(secondData);
  response.json(data);
});

app.get("/api", (request, response) => {
  response.json(data);
});

app.post("/", (request, response) => {
  response.send("Post hvselt irlee");
});

app.delete("/", (request, response) => {
  // Implement deletion logic if needed
  response.send("Deleted successfully");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
