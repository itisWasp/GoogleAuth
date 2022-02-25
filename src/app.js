import cookieParser from "cookie-parser";
import express from "express";
import loginRoute from "./routes/LoginRoute";
import profileRoute from "./routes/ProfileRoute";

const server = express();

server.set("view engine", "ejs");

server.use(express.json());

server.use(cookieParser());

server.use("/api", loginRoute);
server.use("/api", profileRoute);

export default server;
