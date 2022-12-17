import express from "express";
import Container from "typedi";
import { PolygonsController } from "../../controllers/polygons.controller";

const { index, show } = Container.get(PolygonsController);

const usersRouteHandler = (router: express.Router) => {
    router.get("/polygon", index);
    router.get("/polygon/:id", show);
};

export default usersRouteHandler;
