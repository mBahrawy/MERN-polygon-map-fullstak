import Container from './Map.style'
import DeckGL from '@deck.gl/react'
import { SolidPolygonLayer } from '@deck.gl/layers'
import StaticMap from 'react-map-gl'
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@/core/interfaces/AppState'
import { Polygon, PolygonData } from '@/core/interfaces/Map'
import { AppDispatch } from '@/core/store/store'
import { getPolygonDataAction, getPolygonsListAction } from '@/core/store/slices/map-slice'

function Map() {
  const { mapStyle, viewState, mapboxAccessToken, size, polygons } = useSelector((state: AppState) => state.map)
  const { height, width } = size
  const [activeMapItemId, setActiveMapItemId] = useState<string>('')
  const [data, setData] = useState<unknown>([{ polygon: [] }])
  const dispatch = useDispatch<AppDispatch>()
  const renderRef = useRef(0)

  const handleChangeMapItem = (itemId: string) => {
    setActiveMapItemId(itemId)
    const targetMapItem = polygons.find(i => i.id === itemId) || null
    dispatch(getPolygonDataAction(itemId)).then(res => {
      const targetMapItem: PolygonData = res.payload as PolygonData
      targetMapItem && setData([{ polygon: targetMapItem.polygonCoordinates }])
    })
  }

  const layer = new SolidPolygonLayer({
    data,
    getPolygon: d => d.polygon,
    getColor: [1, 255, 0],
    extruded: false,
    getFillColor: [0, 0, 0, 100],
    getLineColor: [255, 255, 255, 255],
  })

  useEffect(() => {
    // To call api only one time
    !renderRef.current && dispatch(getPolygonsListAction())
    renderRef.current++
  }, [renderRef.current])

  return (
    <Container>
      <div className='container'>
        <div className='row'>
          <div className='col-4 mt-3'>
            {polygons.length ? (
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Select polygon</InputLabel>
                <Select label='Outlined secondary' labelId='demo-simple-select-label' id='demo-simple-select' value={activeMapItemId} onChange={e => handleChangeMapItem(e.target.value)}>
                  <MenuItem disabled value={''}>
                    Select a polygin
                  </MenuItem>
                  {polygons.map((p: Polygon) => (
                    <MenuItem key={p.id} value={p.id}>
                      {p.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <h6>Loading polygons..</h6>
            )}
          </div>

          <div className='col-12 mt-3'>
            <div style={{ width, height }}>
              <DeckGL initialViewState={viewState} controller={true} layers={[layer]}>
                <StaticMap {...viewState} mapStyle={mapStyle} mapboxAccessToken={mapboxAccessToken} />
              </DeckGL>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Map
