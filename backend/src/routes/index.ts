import express, { Request, Response, Router } from "express";
import logger from "../utilities/logging-untilities";
import usersRouteHandler from "./api/polygon-routes-handler";

const routes: Router = express.Router();

routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));

routes.get("/", logger, (req: Request, res: Response) => {
    res.status(200).send(`<h1>Welcome to Map polygons API</h1>`);
});

usersRouteHandler(routes);

routes.get("*", logger, (req: Request, res: Response) => {
    res.status(404).send(`<p>Sorry, no data was found in this route.</p>`);
});

export default routes;
