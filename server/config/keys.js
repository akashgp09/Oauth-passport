const GOOGLE_TOKENS = {
  GOOGLE_ACCESS_TOKEN: "Your Google client Id",
  GOOGLE_TOKEN_SECRET: "Your Google Secret Id",
};


const MONGODB = {
  MONGODB_URI: "Your Mongo URI",
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome",
};

const KEYS = {
  ...GOOGLE_TOKENS,
  ...MONGODB,
  ...SESSION,
};

module.exports = KEYS;
