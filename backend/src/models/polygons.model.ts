import { Service } from "typedi";
import { PolygonData, Polygon, PolygonsResponse, PolygonDataResponse } from "./../interfaces/Polygon";
import DUMMY_DATA from "./../DUMMY_DATA.json";

@Service()
export class PolygonsModel {
    async index(): Promise<PolygonsResponse> {
        try {
            const polygons: Polygon[] = DUMMY_DATA.map((item) => {
                return {
                    id: item.id,
                    area: item.area,
                    title: item.title
                };
            });

            return {
                data: polygons,
                code: 200
            };
        } catch (err) {
            throw {
                message: "Could not get polygons.",
                code: 400
            };
        }
    }

    async show(id: string): Promise<PolygonDataResponse> {
        try {
            const targetPolygon: PolygonData | null = DUMMY_DATA.find((p: PolygonData) => p.id === id) || null;

            if (!targetPolygon) {
                return {
                    message: "Polygon was not found.",
                    code: 404
                };
            }

            return {
                data: targetPolygon,
                code: 200
            };
        } catch (err) {
            throw {
                message: "Could not get polygon data.",
                code: 400
            };
        }
    }
}
