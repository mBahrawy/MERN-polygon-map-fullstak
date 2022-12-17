import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import HttpService from '@/core/services/http-service'
import { Polygon, PolygonData, ViewState } from '@/core/interfaces/Map'
import { MapState } from '@/core/interfaces/Map'
import { AsyncThunkConfig } from '../store'

const initialState: MapState = {
  mapboxAccessToken: import.meta.env.VITE_MABBOX_TOKEN,
  mapStyle: import.meta.env.VITE_MABBOX_STYLE,
  activePolygon: null,
  polygons: [],
  size: {
    width: '100%',
    height: '400px',
  },
  viewState: {
    longitude: 31.205753,
    latitude: 29.924526,
    zoom: 8,
    pitch: 0,
    bearing: 0,
  },
}

export const getPolygonsListAction: AsyncThunk<unknown, void, AsyncThunkConfig> = createAsyncThunk('Map/polygons', async (_, thunkAPI): Promise<Polygon | unknown> => {
  const { rejectWithValue } = thunkAPI
  try {
    const { getRequest } = new HttpService()
    const res = await getRequest(`polygon`)
    return res.data
  } catch (error: unknown) {
    return rejectWithValue(error)
  }
})
export const getPolygonDataAction: AsyncThunk<unknown, string, AsyncThunkConfig> = createAsyncThunk('Map/polygonData', async (polygonId, thunkAPI): Promise<PolygonData | unknown> => {
  const { rejectWithValue } = thunkAPI
  try {
    const { getRequest } = new HttpService()
    const res = await getRequest(`polygon/${polygonId}`)
    return res.data
  } catch (error: unknown) {
    return rejectWithValue(error)
  }
})

export const mapSlice = createSlice({
  name: 'Map',
  initialState,
  reducers: {
    setViewState: (state, action: PayloadAction<ViewState>): MapState => {
      return { ...state, viewState: action.payload }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPolygonsListAction.fulfilled, (state, action: PayloadAction<unknown>) => {
      const polygons = action.payload as Polygon[]
      return {
        ...state,
        polygons,
      }
    }).addCase(getPolygonDataAction.fulfilled, (state, action: PayloadAction<unknown>) => {
      const polygonData = action.payload as PolygonData
      return {
        ...state,
        activePolygon: polygonData,
      }
    })
  },
})
export const { setViewState } = mapSlice.actions
export default mapSlice.reducer
