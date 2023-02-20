import L from 'leaflet';

import iconUrl from '../src/images/marker-icon.png';
import iconShadow from '../src/images/marker-shadow.png';


console.log(L.Marker.prototype.options.icon.options);

const { iconSize, shadowSize, iconAnchor, popupAnchor, tooltipAnchor } = L.Marker.prototype.options.icon.options

export const defaultIcon = L.icon({
    iconUrl,
    iconShadow,
    iconSize, 
    shadowSize, 
    iconAnchor, 
    popupAnchor, 
    tooltipAnchor

});