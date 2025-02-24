import nodemailer from "nodemailer";
import { getEmailUpdateSuccessTemplate, getResetPasswordEmailTemplate, getVerificationEmailTemplate, getWelcomeEmailTemplate } from "./template";

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Gmail SMTP server
    port: 587, // Port for TLS
    secure: false, // false for TLS
    auth: {
        user: "marckenlygbeau@gmail.com", // Your Gmail address
        pass: "cxmjrheikeieobqv", // Your Gmail password or app-specific password
    },
});

// Function to send a verification email
export const sendVerificationEmail = async (username: string,email: string, verificationToken: string): Promise<void> => {
    const mailOptions = {
        from: `"Authentication" <marckenlygbeau@gmail.com>`, // Sender address
        to: email, // Recipient address
        subject: "Verify Your Email Address", // Email subject
        html: getVerificationEmailTemplate(username, verificationToken),
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Verification email sent to ${email}`);
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw new Error("Failed to send verification email");
    }
};

export const sendWelcomeEmail = async (username: string,email: string): Promise<void> => {
    const mailOptions = {
        from: `"Authentication" <marckenlygbeau@gmail.com>`, // Sender address
        to: email, // Recipient address
        subject: "Welcome User", // Email subject
        html: getWelcomeEmailTemplate(username),
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Verification email sent to ${email}`);
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw new Error("Failed to send verification email");
    }
};
export const sendResetPasswordEmail = async (username: string,email: string, resetToken: string): Promise<void> => {
    const mailOptions = {
      from: `"Advance Authentication " <marckenlygbeau@gmail.com>`,
      to: email,
      subject: "Password Reset Request",
      html: getResetPasswordEmailTemplate(username, resetToken), // Replace "User" with the actual username if available
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log(`Reset password email sent to ${email}`);
    } catch (error) {
      console.error("Error sending reset password email:", error);
      throw new Error("Failed to send reset password email");
    }
  };
  
  export const sendEmailUpdateSuccess = async (username: string,email: string, ): Promise<void> => {
    const mailOptions = {
      from: `"Advance Authentication " <marckenlygbeau@gmail.com>`,
      to: email,
      subject: "Password Updated Successfully",
      html: getEmailUpdateSuccessTemplate(username, email),
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log(`Password update success notification sent to ${email}`);
    } catch (error) {
      console.error("Error sending email update success notification:", error);
      throw new Error("Failed to send password update success notification");
    }
  };