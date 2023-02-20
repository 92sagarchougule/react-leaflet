import { Marker, Popup, Tooltip } from 'react-leaflet';
import { defaultIcon } from '../defaulticons';
import 'leaflet/dist/leaflet.css';
import {Cities} from '../data/Cities';

export const MarkerLayer = ({data})=>{

    return data.features.map(feature => {
  
      const {coordinates} = feature.geometry;
      const {name} = feature.properties;
      const {pop_max} = feature.properties;
  
      return(
      <Marker 
      key = {String(coordinates)}
      position={[coordinates[1],coordinates[0]]} 
      icon = {defaultIcon}>
      <Popup>
        <h3> Name : {name}</h3>
        <h4> Max Population :{pop_max}</h4>
      </Popup>
      </Marker>
    )
    
  });
  };