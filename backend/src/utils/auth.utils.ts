import crypto from "crypto";

export const generatedVerificationCode =()=>{
    return Math.floor(100000 + Math.random() * 900000).toString();
}


export const generateResetToken = (): string => {
  return crypto.randomBytes(20).toString("hex");
};