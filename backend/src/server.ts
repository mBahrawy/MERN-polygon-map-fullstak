import "reflect-metadata";
import express, { Application } from "express";
import morgan from "morgan";
import routes from "./routes/index";
import path from "path";
import cors from "cors";
import * as dotenv from "dotenv";

// Defining app base folder
global.__basedir = __dirname;

dotenv.config({ path: `.env` });

const PORT = process.env.APP_BACKEND_PORT;

// create an instance server
const app: Application = express();

// HTTP request logger middleware
app.use(morgan("dev"));

// Require static assets from public folder
app.use("/public", express.static(path.join(__dirname, "./public")));

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:5000",
            "http://127.0.0.1:3000",
            "http://127.0.0.1:3001",
            "http://127.0.0.1:5000"
        ]
    })
);
app.use("/", routes);

// start express server
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is starting at prot:${PORT}`);
});

export default app;
