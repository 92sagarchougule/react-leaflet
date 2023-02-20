import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet';
import { defaultIcon } from './defaulticons';
import 'leaflet/dist/leaflet.css';
import {Cities} from './data/Cities';
import {MarkerLayer} from '../src/Layers/MarkerLayer';

import {Elevations} from '../src/Layers/heighest_point';

import {MarkerLayer_with_tooltip} from '../src/Layers/MarkerLayer_with_tooltip';
import { Mh_Layer } from './Layers/Mh_Layer';

import {Adminlayers} from './Layers/Admin_Layer';
import { WMSTileLayer } from 'react-leaflet';




function Map(){
    return(
        <MapContainer center={[20, 78]} zoom={5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
  {/* <MarkerLayer data = {Cities} /> */}
  <MarkerLayer_with_tooltip data={Elevations}/>




</MapContainer>

    )
}

export default Map;