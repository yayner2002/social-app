const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // 'Yayner token'
    if (!token) {
      throw new Error("Authentication failed. No token provided");
    }
    const decodedToken = jwt.verify(token, "secret_dont_share");
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed.", 401);
    return next(error);
  }
};
