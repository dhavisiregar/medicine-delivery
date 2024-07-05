import express, { Application } from "express";
import dotenv from "dotenv";
import drugRouter from "./src/router/drugRouter.ts";
import orderRouter from "./src/router/orderRouter.ts";
import authRouter from "./src/router/authRouter.ts";
import transactionRouter from "./src/router/transactionRouter.ts";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", drugRouter);
app.use("/api", orderRouter);
app.use("/api/auth", authRouter);
app.use("/api/transaction", transactionRouter);

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
