import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({ message: "Hi" });
});

app.listen(port, () => console.log(`http://localhost:${port}/`));
