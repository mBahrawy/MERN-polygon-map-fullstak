export interface ViewState {
  longitude: number
  latitude: number
  zoom: number
  pitch: number
  bearing: number
}

export interface MapState {
  mapStyle: string
  mapboxAccessToken: string
  viewState: ViewState
  activePolygon: PolygonData
  size: {
    width: string
    height: string
  }
  polygons: Polygon[] 
}


export type polygonCoordinates = Array<number[]>

export interface Polygon {
  id?: string
  title: string
  area: number | null
}

export interface PolygonData extends Polygon {
  polygonCoordinates: polygonCoordinates
}