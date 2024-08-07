import express from "express";
const router = express.Router();
import { rwClient, roClient, roBearer } from "./twitter-controller.js";

// server-test-api
router.get("/", (req, res) => {
  res.sendStatus(200);
});

// get-logged-user
router.get("/users/me", async (req, res) => {
  const meUser = await roClient.v2.me();
  const { id, name, username } = meUser.data;
  console.log(id);
  res.status(200).json({ username, name, id });
});

// create-a-tweet
router.post("/tweet/create", async (req, res) => {
  const { tweetContent } = req.body;
  try {
    await rwClient.v2.tweet(tweetContent);
    res.status(200).json({ tweetContent });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
});

// get-user-by-username

// get-followers

// get-following

// homeTimeline-explore

// not-found-endpoint
router.get("/*", (req, res) => {
  res.sendStatus(404);
});

export default router;
