const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HTnupEdNZ4HNcoqLaUGkQDuyaFHtMNBbCkIdqYHk3hKgikwOgFzssikER1PQWRyrUlx0Ffc5imiVXlTh6wlUqan00dlyv59s3"
);

//app config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Received: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  //created payent intent
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen

exports.api = functions.https.onRequest(app);
