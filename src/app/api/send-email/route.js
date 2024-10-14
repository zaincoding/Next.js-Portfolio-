import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services or SMTP servers
      auth: {
        user: process.env.EMAIL_USER,  // Your email
        pass: process.env.EMAIL_PASS,  // Your email password or app password
      },
    });

    // Set up email options
    const mailOptions = {
      from: email, // sender address (email entered by the user)
      to: process.env.RECEIVER_EMAIL, // your email where you want to receive contact form submissions
      subject: `New Contact Form Submission from ${name}`,
      text: message, // plain text body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
  }
}
