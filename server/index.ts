import * as express from "express";
import * as next from "next";

import * as bodyParser from "body-parser";

import * as yargs from "yargs";

import * as config from "config";
import * as nodemailer from "nodemailer";

const argv = yargs.argv;

// Load next app
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Read port number from arguiments or config
const PORT = argv.port || config.get("port");

// Set body parameter parsing
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Set up email service
const mailConfig: {
  service?: string;
  user?: string;
  pass?: string;
  subject?: string;
} = config.get("email");
const mailTransport = nodemailer.createTransport({
  service: mailConfig.service,
  auth: {
    user: mailConfig.user,
    pass: mailConfig.pass
  }
});

nextApp.prepare().then(() => {
  // bodyParser is needed just for POST.

  server.post("/message", (req, res) => {
    if (!mailConfig.user || !mailConfig.pass) {
      return res.status(500).send("Email configuration is missing");
    }

    const message = req.body.message;
    const email = req.body.email;
    const name = req.body.name;

    if (!message || !email || !name) {
      return res.status(422).send();
    }

    const mailOptions = {
      to: mailConfig.user,
      from: email,
      subject: mailConfig.subject,
      html: `<p><b>Name:</b> ${name}</p> <p><b>Email:</b> ${email}</p> <p><b>Message:</b> ${message}</p>`
    };

    mailTransport.sendMail(mailOptions, (err: Error | null, info: any) => {
      if (err) {
        return res.status(500).send(err.message);
      } else {
        return res.status(200).send(info.messageId);
      }
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, err => {
    if (err) {
      throw err;
    }
    /* tslint:disable no-console */
    console.log(`Ready on http://localhost:${PORT}`);
  });
});
