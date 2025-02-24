import { Request,Response } from "express"
import jwt from "jsonwebtoken";
import User from "../models/User";
import  bcrypt  from 'bcryptjs';
import { generatedVerificationCode, generateResetToken } from "../utils/auth.utils";
import { sendEmailUpdateSuccess, sendResetPasswordEmail, sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/nodemail";



export const signup = async(req:Request,res:Response): Promise<void> =>{
    const {name,email,password} = req.body;
    try {
        let userAlreadyExist = await User.findOne({
            email: email,
          });
          
         
          if (userAlreadyExist) {
           res.status(400).json({ message: "User already exists" });
           return ;
          }
          const verificationToken = generatedVerificationCode()
 // Hash the new password
 const hashedPassword = await bcrypt.hash(password, 10);
         const user = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
          });

       // Save the user to the database
        await user.save();

        // Send verification email
        await sendVerificationEmail(name,email, verificationToken);

        // Set authentication token
        setAuthToken(res, user.id);
          res.status(200).json({ message: "User registered successfully. Please verify your email." });
          return;
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "User registration failed"});
        return;
    }

}

export const verifyEmail = async(req:Request,res:Response): Promise<void> =>{
    const {code} = req.body
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() } 
        })

        if(!user){
             res.status(400).json({ message: "Invalid or expired verification code" });
             return
        } 
            user.isVerified = true;
            user.verificationToken = null;
            user.verificationTokenExpiresAt = null;
    
            await user.save();
            sendWelcomeEmail(user.name, user.email)
            res.status(200).json({ message: "Thank you for joining us. We're thrilled to have you as part of our community." });
            return;
        

      
    } catch (error) {
        
        res.status(500).json({message: "something went wrong"})
    }

}


export const login = async(req: Request, res: Response): Promise<void>=>{
    const {email,password} = req.body;
    try {
        
        const user = await User.findOne({email:email}).select("+password");
        if(!user){
            res.status(404).json({ message: "User not found" });
            return
        }
     
            const isPasswordMatch =await bcrypt.compare(password, user.password) 
            if(!isPasswordMatch){
                res.status(400).json({ message: "Invalid credentials" });
                return;
            
            }
            if (!user.isVerified) {
                res.status(403).json({ message: "Please verify your email address to log in" });
                return;
              }
              user.lastLogin = new Date();
              await user.save();

              setAuthToken(res, user.id);
              res.status(200).json({message:"User logged in successfully"})
              return;
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "something went wrong" });
        return;
    }

}
export const requestPasswordReset = async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
           // Generate a reset token and set its expiration time
    const resetToken = generateResetToken();
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = new Date(Date.now() + 3600000); // 1 hour from now
    await user.save();

    // Send the reset password email
    await sendResetPasswordEmail(user.name, user.email, resetToken);
    
    res.status(200).json({ message: "Password reset email sent" });
    return;
   

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "something went wrong" });
        return;
    }
}


export const resetPassword = async (req: Request, res: Response): Promise<void> => {
    const { token } = req.params;
		const { password } = req.body;

    try {
      // Find the user by the reset token and check if it's still valid
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpiresAt: { $gt: Date.now() },
    });
  
      if (!user) {
        res.status(400).json({ message: "Invalid or expired reset token" });
        return;
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);
      
  
      // Update the user's password and clear the reset token fields
      user.password = hashedPassword;
      user.resetPasswordToken = null;
      user.resetPasswordExpiresAt = null;
      await user.save({ validateBeforeSave: false });
      console.log(user.name, user.email)
     
      await sendEmailUpdateSuccess(user.name, user.email)
  
      res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };

  export const getCurrentUser = async(req: Request, res: Response)=>{
    const userId = req.userId;
  
    try {
      const user = await User.findById(userId).select("-password");
      if(!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.status(200).json(user);
      return;
  
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
      return;
      
    }
  }

  export const logout = async(req: Request, res: Response)=>{
    res.cookie("auth_token", "", {
      expires: new Date(0),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    });
    res.status(200).json({ message: "Logged out successfully" });
  }

  
const setAuthToken = (res: Response, userId: string) => {
    const token = jwt.sign(
      { userId },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1d" }
    );
  
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 86400000, // 1 day in milliseconds

    });
  
    return token;
  };