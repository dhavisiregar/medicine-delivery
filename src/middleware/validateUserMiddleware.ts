import { body } from "express-validator";

export const validateUser = [
  body("email").isEmail().withMessage("Enter a valid email address"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .matches(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?]).{8,}/)
    .withMessage(
      "Password must be at least 8 characters long, contain at least one uppercase, one lowercase, one number and one special character"
    ),
];
