import express, { Request, Response } from 'express';
import { validateCode, validateMyUserLogin, validateMyUserRegister, validatePasswordReset, validateRequestForgotPassword } from '../middleware/validation';
import { getCurrentUser, login, logout, requestPasswordReset, resetPassword, signup, verifyEmail } from '../controllers/authController';
import verifyToken from '../middleware/verifyToken';
const router = express.Router();

router.post('/register', validateMyUserRegister, signup)
router.post('/login',validateMyUserLogin, login)
router.post('/logout', logout)
router.get("/me",verifyToken, getCurrentUser)
router.post('/verify-token',validateCode,  verifyEmail)
router.post("/validate-token", verifyToken, (req: Request, res: Response)=>{
    res.status(200).send({userId: req.userId})

})

router.post('/forgot-password-request',validateRequestForgotPassword, requestPasswordReset)
router.post('/reset-password/:token',validatePasswordReset, resetPassword)


export default router