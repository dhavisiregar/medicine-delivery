import { Router } from "express";
import * as transactionController from "../controller/transactionController.ts";
import { authenticateToken } from "../middleware/authMiddleware.ts";

const router = Router();

router.post(
  "/snap-transaction",
  authenticateToken,
  transactionController.createSnapTransaction
);

export default router;
