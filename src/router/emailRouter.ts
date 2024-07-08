import { Router } from "express";
import { createEmail } from "../controller/emailController.ts";

const router = Router();

router.post("/send-email", createEmail);

export default router;
