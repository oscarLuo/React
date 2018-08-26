import nodemailer from 'nodemailer';

const from = `Bookworm <info@bookworm.com>`;

const setup = () => {
    return nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "17970bd7996eed",
          pass: "3c68df15b55ffd"
        }
      });
}
export function sendConfirmationEmail(user) {
    const transport = setup();
    const email = {
        from,
        to: user.email,
        subject: 'Welcome to Bookworm',
        text:`Welcome to Bookworm, confirm your email. ${user.generateConfirmationUrl()}`
    }

    transport.sendMail(email);
}
