import dotenv from "dotenv";
dotenv.config();
const config = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 8000,
  MONGOURL: process.env.MONGO_URL || "",
  JWTSECRET: process.env.JWT_SECRET || "Your_Secret_Key",
};
export default config;
