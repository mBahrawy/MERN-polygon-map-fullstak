import { Service } from "typedi";
import { Request, Response } from "express";
import { PolygonsModel } from "../models/polygons.model";
import { PolygonsResponse, PolygonDataResponse } from "./../interfaces/Polygon";

@Service()
export class PolygonsController {
    constructor(private _polygonsModel: PolygonsModel) {}

    public index = async (req: Request, res: Response) => {
        try {
            const polygonsRes: PolygonsResponse = await this._polygonsModel.index();
            res.status(polygonsRes.code).json(polygonsRes.data);
        } catch (err: unknown) {
            const error: PolygonsResponse = res as unknown as PolygonsResponse;
            res.status(error.code).json(error.message);
        }
    };

    public show = async (req: Request, res: Response) => {
        try {
            const polygonDataRes: PolygonDataResponse = await this._polygonsModel.show(req.params.id);
            res.status(polygonDataRes.code).json(polygonDataRes.data);
        } catch (err: unknown) {
            const error: PolygonDataResponse = res as unknown as PolygonDataResponse;
            res.status(error.code).json(error.message);
        }
    };
}
