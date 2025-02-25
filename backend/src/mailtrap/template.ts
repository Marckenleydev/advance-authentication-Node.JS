export const getVerificationEmailTemplate = (username: string, verificationToken: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9fafb;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          padding: 2rem;
          text-align: center;
        }
        .header img {
          max-width: 150px;
        }
        .banner {
          background-color: #365CCE;
          color: #ffffff;
          padding: 2rem;
          text-align: center;
        }
        .banner .divider {
          width: 40px;
          height: 1px;
          background-color: #ffffff;
          margin: 0 auto;
        }
        .banner h1 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }
        .banner p {
          font-size: 0.875rem;
          margin: 0;
        }
        .content {
          padding: 2rem;
          color: #374151;
        }
        .content h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .content p {
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0.5rem 0;
        }
        .otp-container {
          margin: 1rem 0;
        }
        .otp-container table {
          margin: 0 auto;
          border-collapse: separate;
          border-spacing: 1rem;
        }
        .otp-container td {
          width: 40px;
          height: 40px;
          text-align: center;
          vertical-align: middle;
          font-size: 1.25rem;
          font-weight: 500;
          color: #365CCE;
          border: 1px solid #365CCE;
          border-radius: 8px;
          background-color: #f9fafb;
        }
        .verify-button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: bold;
          color: #ffffff;
          background-color: #f97316;
          border-radius: 8px;
          text-decoration: none;
          margin-top: 1rem;
        }
        .verify-button:hover {
          background-color: #ea580c;
        }
        .footer {
          padding: 2rem;
          text-align: center;
          color: #6b7280;
        }
        .footer a {
          color: #365CCE;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        .social-icons {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 1rem;
          margin-left: 1rem;
        }
        .social-icons a {
          color: #6b7280;
          text-decoration: none;
        }
        .social-icons a:hover {
          color: #365CCE;
        }
        .copyright {
          background-color: #365CCE;
          color: #ffffff;
          padding: 1rem;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header"></div>

        <!-- Banner -->
        <div class="banner">
          <div class="divider"></div>
          <h1>Verify your E-mail Address</h1>
          <p>THANKS FOR SIGNING UP!</p>
        </div>

        <!-- Content -->
        <div class="content">
          <h2>Hello ${username},</h2>
          <p>Please use the following One Time Password (OTP):</p>
          <div class="otp-container">
            <table>
              <tr>
                ${verificationToken
                  .split("")
                  .map((digit) => `<td>${digit}</td>`)
                  .join("")}
              </tr>
            </table>
          </div>
          <p>
            This passcode will only be valid for the next <strong>2 minutes</strong>.
          </p>
          <p>Thank you,<br>Infynno Team</p>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>
            This email was sent from
            <a href="mailto:sales@infynno.com">marchowcase.com</a>.
            If you'd rather not receive this kind of email, you can
            <a href="#">unsubscribe</a> or
            <a href="#">manage your email preferences</a>.
          </p>
          <div class="social-icons">
            <a href="#">Facebook</a>
            <div></div>
            <a href="#">LinkedIn</a>
            <div></div>
            <a href="#">Instagram</a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="copyright">
          <p>© 2023 marc.dev. All Rights Reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};


export const getWelcomeEmailTemplate = (username: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Platform</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9fafb;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          padding: 2rem;
          text-align: center;
        }
        .header img {
          max-width: 150px;
        }
        .banner {
          background-color: #365CCE;
          color: #ffffff;
          padding: 2rem;
          text-align: center;
        }
        .banner .divider {
          width: 40px;
          height: 1px;
          background-color: #ffffff;
          margin: 0 auto;
        }
        .banner h1 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }
        .banner p {
          font-size: 0.875rem;
          margin: 0;
        }
        .content {
          padding: 2rem;
          color: #374151;
        }
        .content h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .content p {
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0.5rem 0;
        }
        .footer {
          padding: 2rem;
          text-align: center;
          color: #6b7280;
        }
        .footer a {
          color: #365CCE;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        .social-icons {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 1rem;
          margin-left: 1rem;
        }
        .social-icons a {
          color: #6b7280;
          text-decoration: none;
        }
        .social-icons a:hover {
          color: #365CCE;
        }
        .copyright {
          background-color: #365CCE;
          color: #ffffff;
          padding: 1rem;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
      

        <!-- Banner -->
        <div class="banner">
          <div class="divider"></div>
          <h1>Welcome to Our Platform!</h1>
          <p>We're excited to have you on board.</p>
        </div>

        <!-- Content -->
        <div class="content">
          <h2>Hello ${username},</h2>
          <p>Thank you for joining us. We're thrilled to have you as part of our community.</p>
          <p>Now login to start our service</p>
         
          <p>If you have any questions, feel free to reply to this email.</p>
          <p>Welcome aboard!</p>
          <p>Best regards,<br>Your Team</p>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>
            This email was sent from
            <a href="mailto:support@yourplatform.com">marckenlygbeau@gmail.com.com</a>.
            If you'd rather not receive this kind of email, you can
            <a href="#">unsubscribe</a> or
            <a href="#">manage your email preferences</a>.
          </p>
          <div class="social-icons">
            <a href="#">Facebook</a>
            <div></div>
            <a href="#">LinkedIn</a>
            <div></div>
            <a href="#">Instagram</a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="copyright">
          <p>© ${new Date().getFullYear()} Your Platform. All Rights Reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getResetPasswordEmailTemplate = (username: string, resetToken: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9fafb;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          padding: 2rem;
          text-align: center;
        }
        .header img {
          max-width: 150px;
        }
        .banner {
          background-color: #365CCE;
          color: #ffffff;
          padding: 2rem;
          text-align: center;
        }
        .banner .divider {
          width: 40px;
          height: 1px;
          background-color: #ffffff;
          margin: 0 auto;
        }
        .banner h1 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }
        .banner p {
          font-size: 0.875rem;
          margin: 0;
        }
        .content {
          padding: 2rem;
          color: #374151;
        }
        .content h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .content p {
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0.5rem 0;
        }
        .reset-link {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: bold;
          color: #ffffff;
          background-color: #f97316;
          border-radius: 8px;
          text-decoration: none;
          margin-top: 1rem;
        }
        .reset-link:hover {
          background-color: #ea580c;
        }
        .footer {
          padding: 2rem;
          text-align: center;
          color: #6b7280;
        }
        .footer a {
          color: #365CCE;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        .social-icons {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 1rem;
          margin-left: 1rem;
        }
        .social-icons a {
          color: #6b7280;
          text-decoration: none;
        }
        .social-icons a:hover {
          color: #365CCE;
        }
        .copyright {
          background-color: #365CCE;
          color: #ffffff;
          padding: 1rem;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header"></div>

        <!-- Banner -->
        <div class="banner">
          <div class="divider"></div>
          <h1>Password Reset Request</h1>
          <p>We received a request to reset your password.</p>
        </div>

        <!-- Content -->
        <div class="content">
          <h2>Hello ${username},</h2>
          <p>You requested a password reset. Click the button below to reset your password:</p>
          <a href="https://advance-authentication-node-js.vercel.app/reset-password?token=${resetToken}" class="reset-link">Reset Password</a>
          <p>This link will expire in <strong>1 hour</strong>.</p>
          <p>If you did not request this, please ignore this email.</p>
          <p>Thank you,<br>Your Team</p>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>
            This email was sent from
            <a href="mailto:support@yourplatform.com">support@yourplatform.com</a>.
            If you'd rather not receive this kind of email, you can
            <a href="#">unsubscribe</a> or
            <a href="#">manage your email preferences</a>.
          </p>
          <div class="social-icons">
            <a href="#">Facebook</a>
            <div></div>
            <a href="#">LinkedIn</a>
            <div></div>
            <a href="#">Instagram</a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="copyright">
          <p>© ${new Date().getFullYear()} Your Platform. All Rights Reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getEmailUpdateSuccessTemplate = (username: string, newEmail: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Updated Successfully</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9fafb;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          padding: 2rem;
          text-align: center;
        }
        .header img {
          max-width: 150px;
        }
        .banner {
          background-color: #365CCE;
          color: #ffffff;
          padding: 2rem;
          text-align: center;
        }
        .banner .divider {
          width: 40px;
          height: 1px;
          background-color: #ffffff;
          margin: 0 auto;
        }
        .banner h1 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }
        .banner p {
          font-size: 0.875rem;
          margin: 0;
        }
        .content {
          padding: 2rem;
          color: #374151;
        }
        .content h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .content p {
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0.5rem 0;
        }
        .footer {
          padding: 2rem;
          text-align: center;
          color: #6b7280;
        }
        .footer a {
          color: #365CCE;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        .social-icons {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 1rem;
          margin-left: 1rem;
        }
        .social-icons a {
          color: #6b7280;
          text-decoration: none;
        }
        .social-icons a:hover {
          color: #365CCE;
        }
        .copyright {
          background-color: #365CCE;
          color: #ffffff;
          padding: 1rem;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header"></div>

        <!-- Banner -->
        <div class="banner">
          <div class="divider"></div>
          <h1>Email Updated Successfully</h1>
          <p>Your email address has been updated.</p>
        </div>

        <!-- Content -->
        <div class="content">
          <h2>Hello ${username},</h2>
          <p>Your Password has been successfully updated to <strong>${newEmail}</strong>.</p>
          <p>If you did not make this change, please contact our support team immediately.</p>
          <p>Thank you,<br>Your Team</p>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>
            This email was sent from
            <a href="mailto:support@yourplatform.com">support@yourplatform.com</a>.
            If you'd rather not receive this kind of email, you can
            <a href="#">unsubscribe</a> or
            <a href="#">manage your email preferences</a>.
          </p>
          <div class="social-icons">
            <a href="#">Facebook</a>
            <div></div>
            <a href="#">LinkedIn</a>
            <div></div>
            <a href="#">Instagram</a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="copyright">
          <p>© ${new Date().getFullYear()} Your Platform. All Rights Reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};