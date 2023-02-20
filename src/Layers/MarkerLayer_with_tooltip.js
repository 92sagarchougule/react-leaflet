import { Marker, Popup, Tooltip } from 'react-leaflet';
import { MountainIcon } from '../mountainicon';
import 'leaflet/dist/leaflet.css';
import {Cities} from '../data/Cities';
import '../Layers/style.css'




export const MarkerLayer_with_tooltip = ({data})=>{

    return data.features.map(feature => {

  
      const {coordinates} = feature.geometry;
      const {name} = feature.properties;
      const {elevation} = feature.properties;
      const {region} = feature.properties;
  
      return(
      <Marker 
      key = {String(coordinates)}
      position={[coordinates[1],coordinates[0]]} 
      icon = {MountainIcon}>

      <Popup className ='tooltip'>
        <h1> Mt: {name}</h1>
        <hr></hr>
        <h3> Elevation: {elevation} mtrs</h3>
        <hr></hr>
        <h3> Comment: {region}</h3>
      </Popup>

      </Marker>
    )
    
  });
  };