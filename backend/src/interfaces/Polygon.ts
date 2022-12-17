export type polygonCoordinates = Array<number[]>;

export interface Polygon {
    id?: string;
    title: string;
    area: number | null;
}

export interface PolygonData extends Polygon {
    polygonCoordinates: polygonCoordinates;
}
export interface Response {
    code: number;
    data?: unknown;
    message?: string;
}

export interface PolygonsResponse extends Response {
    data?: Polygon[];
}
export interface PolygonDataResponse extends Response {
    data?: PolygonData;
}
