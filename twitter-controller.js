import { config } from "dotenv";
config({ path: `${process.cwd()}/live.env` });

import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

const bearer = new TwitterApi(process.env.BEARER_TOKEN);

const rwClient = client.readWrite;
const roClient = client.readOnly;
const roBearer = bearer.readOnly;

export { rwClient, roClient, roBearer };
