import rateLimit from "../../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const result = await rateLimit.limit(`ip:${req.ip}`);
    const success = result.success;
    console.log(req.ip);
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, Try again later!" });
    }

    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
  // undefinedFunction();
};

export default rateLimiter;
