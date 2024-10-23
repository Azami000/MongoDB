import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

const emailSender = async (
  sendemail: string,
  subject: string,
  html: any,
  text?: string
) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "chaka770@gmail.com",
      pass: "nllecuctsylaqokj",
    },
  });

  const options = {
    from: "chaka770@gmail.com",
    to: [sendemail],
    html: html,
    subject: subject,
  };

  await transport.sendMail(options);
};

app.get("/", async (req, res) => {
  await emailSender(
    "nyamkasharaw@gmail.com",
    "hi",
    ` <div style="background-color: blueviolet; color: blanchedalmond">
      <a href="https://www.youtube.com/"> <button>yu bnaaa</button></a>
    </div>`
  );
  res.status(200).send({ message: "Hi" });
});

app.listen(port, () => console.log(`http://localhost:${port}/`));
