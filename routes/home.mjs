import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  res.send(
    `
    <html>
    <head>
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <body style="background-color: black; display: flex; align-items: center; justify-content: center;">
    <span style="color: white; font-family: 'Roboto';">
    Welcome to Aboy's Address API!
    </span>
    </body>
    </head>
    </html>
    `
  );
});


export default router;
