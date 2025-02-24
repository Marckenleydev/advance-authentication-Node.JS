import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    next();
};

export const validateMyUserRegister = [
    body("name").isString().notEmpty().withMessage("name is required"),
    body("email").isString().notEmpty().isEmail().withMessage("Email is required"),
    body("password")
        .isString()
        .notEmpty()
        .isLength({min: 6})
        .withMessage("password is required"),
    handleValidationErrors,
  ];

  export const validateMyUserLogin = [
    
    body("email").isString().notEmpty().isEmail().withMessage("Email is required"),
    body("password")
        .isString()
        .notEmpty()
        .withMessage("password is required"),
    handleValidationErrors,
  ];

  export const validateCode = [
    body("code").isString().notEmpty().withMessage("code is required"),
    handleValidationErrors,
  ];

  export const validateRequestForgotPassword = [
    body("email")
    .isString()
    .notEmpty()
    .withMessage("email is required"),
    handleValidationErrors,
  ];

  export const validatePasswordReset = [

    body("password")
    .isString()
    .notEmpty()
    .isLength({min: 6})
    .withMessage("password is required"),
    handleValidationErrors,
  ];

