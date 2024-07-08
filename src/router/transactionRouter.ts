import { Router } from "express";
import * as transactionController from "../controller/transactionController.ts";

const router = Router();

router.post("/snap-transaction", transactionController.createSnapTransaction);
router.post(
  "/bank-transfer",
  transactionController.createBankTransferTransaction
);

export default router;
