// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   const { firstName, lastName, email, phone, subject, message } = await req.json();

//   const user = process.env.EMAIL_USER;
//   const pass = process.env.EMAIL_PASS;
  
//   const recipientEmail = "shareenfais@gmail.com";

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: user,
//       pass: pass,
//     },
//   });

//   try {
//     await transporter.verify();
//   } catch (error) {
//     console.error("Transporter verification failed:", error);
//     return NextResponse.json(
//       { error: "Failed to connect to email service." },
//       { status: 500 }
//     );
//   }

//   const mailOptions = {
//     from: `"${firstName} ${lastName}" <${user}>`, 
//     to: recipientEmail, 
//     replyTo: email, 
//     subject: `New Contact Form Subject: ${subject}`,
//     html: `
//       <h2>New Contact Form Submission</h2>
//       <p>You received a new message from your website's contact form.</p>
//       <ul>
//         <li><strong>First Name:</strong> ${firstName}</li>
//         <li><strong>Last Name:</strong> ${lastName}</li>
//         <li><strong>Email:</strong> ${email}</li>
//         <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
//       </ul>
//       <hr>
//       <h3>Subject:</h3>
//       <p>${subject}</p>
//       <h3>Message:</h3>
//       <p>${message}</p>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json(
//       { message: "Email sent successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Failed to send email:", error);
//     return NextResponse.json(
//       { error: "Failed to send email." },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper function to create the professional email for the admin
function generateAdminEmailHTML(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  subject: string,
  message: string
) {
  const brandColor = "#22c55e"; // Your secondary color from global.css

  return `
  <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
    <div style="background-color: ${brandColor}; color: white; padding: 20px;">
      <h1 style="margin: 0; font-size: 24px;">New Website Inquiry</h1>
    </div>
    <div style="padding: 24px; font-size: 16px; line-height: 1.5;">
      <p>You have received a new contact form submission from <strong>${firstName} ${lastName}</strong>.</p>
      
      <h2 style="font-size: 18px; color: ${brandColor}; border-bottom: 2px solid #f4f4f4; padding-bottom: 6px;">Contact Details</h2>
      <ul style="list-style-type: none; padding: 0;">
        <li style="margin-bottom: 12px;"><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li style="margin-bottom: 12px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: ${brandColor};">${email}</a></li>
        <li style="margin-bottom: 12px;"><strong>Phone:</strong> ${
          phone || "Not provided"
        }</li>
      </ul>
      
      <h2 style="font-size: 18px; color: ${brandColor}; border-bottom: 2px solid #f4f4f4; padding-bottom: 6px;">Message</h2>
      <p style="font-weight: bold; margin: 0;">Subject: ${subject}</p>
      <div style="background-color: #f9f9f9; border-radius: 4px; padding: 16px; margin-top: 12px;">
        ${message.replace(/\n/g, "<br>")}
      </div>
    </div>
    <div style="background-color: #f4f4f4; color: #888; padding: 20px; text-align: center; font-size: 12px;">
      <p>This message was sent from the contact form on advanced.com.pk</p>
    </div>
  </div>
  `;
}

// Helper function to create the confirmation email for the user
function generateUserConfirmationHTML(
  firstName: string,
  subject: string,
  message: string
) {
  const brandColor = "#22c55e";

  return `
  <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
    <div style="background-color: ${brandColor}; color: white; padding: 20px;">
      <h1 style="margin: 0; font-size: 24px;">Advanced Systems Limited</h1>
    </div>
    <div style="padding: 24px; font-size: 16px; line-height: 1.5;">
      <p>Hi ${firstName},</p>
      <p>Thank you for reaching out to us. We have successfully received your inquiry and will get back to you as soon as possible.</p>
      <p>Here is a copy of your message for your records:</p>
      
      <h2 style="font-size: 18px; color: ${brandColor}; border-bottom: 2px solid #f4f4f4; padding-bottom: 6px;">Your Inquiry</h2>
      <p style="font-weight: bold; margin: 0;">Subject: ${subject}</p>
      <div style="background-color: #f9f9f9; border-radius: 4px; padding: 16px; margin-top: 12px;">
        ${message.replace(/\n/g, "<br>")}
      </div>
    </div>
    <div style="background-color: #f4f4f4; color: #888; padding: 20px; text-align: center; font-size: 12px;">
      <p>&copy; ${new Date().getFullYear()} Advanced Systems Limited. All rights reserved.</p>
    </div>
  </div>
  `;
}

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, subject, message } =
    await req.json();

  // Get credentials from environment variables
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const recipientEmail = process.env.EMAIL_RECIPIENT;

  // Validate environment variables
  if (!user || !pass || !recipientEmail) {
      console.error("Missing environment variables for email configuration.");
      return NextResponse.json(
          { error: "Server configuration error." },
          { status: 500 }
      );
  }

  // --- ✅ Use Brevo SMTP Settings ---
  // const transporter = nodemailer.createTransport({
  //   host: "smtp-relay.brevo.com",
  //   port: 587,
  //   secure: false, // TLS requires secure:false
  //   auth: {
  //     user: user, // Your Brevo login email from .env.local
  //     pass: pass, // Your Brevo SMTP key from .env.local
  //   },
  // });

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  try {
    await transporter.verify();
  } catch (error) {
    console.error("Transporter verification failed:", error);
    return NextResponse.json(
      { error: "Failed to connect to email service." },
      { status: 500 }
    );
  }

  const adminMailOptions = {
    from: `"Website Contact Form" <${user}>`, 
    to: recipientEmail,
    replyTo: email,
    subject: `New Contact Form Subject: ${subject}`,
    html: generateAdminEmailHTML(
      firstName,
      lastName,
      email,
      phone,
      subject,
      message
    ),
  };

  const userMailOptions = {
    from: `"Advanced Systems Limited" <${user}>`, 
    to: email, 
    subject: `We've received your inquiry (Subject: ${subject})`,
    html: generateUserConfirmationHTML(firstName, subject, message),
  };

  try {
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
    
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    let errorMessage = "Failed to send email.";
    if (error instanceof Error) {
        console.error("Nodemailer error details:", error.message); 
    }
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

