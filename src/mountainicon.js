import L from 'leaflet';

import iconUrl from '../src/images/Mountain.png';
import iconShadow from '../src/images/marker-shadow.png';


const { iconSize, shadowSize, iconAnchor, popupAnchor, tooltipAnchor } = L.Marker.prototype.options.icon.options

export const MountainIcon = L.icon({
    iconUrl,
    iconShadow,
    iconSize, 
    shadowSize, 
    iconAnchor, 
    popupAnchor, 
    tooltipAnchor

});