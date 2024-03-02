import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { client } from "./db.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get("/api/getCustomers", async (req, res) => {
  try {
    const result = await client.query(`select * from customers`);
    res.send({
      status: "success",
      message: "fetched successfully",
      data: result.rows,
    });
  } catch (error) {
    res.send({
      status: "failure",
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
