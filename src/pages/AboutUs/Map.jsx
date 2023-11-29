import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {
    const mapRef = useRef(null);
    const latitude = 23.8103;
    const longitude = 90.4125;
    const position = [latitude, longitude];
  return (
            <div className="px-7 h-full w-full text-justify rounded-lg shadow-md flex bg-base-200 flex-col justify-center items-center gap-3" >
 <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef}  style={{height: "75vh", width: "45vw"}}> 
{/* <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: "50vh", width: "50vw"}}> */}

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
<Marker position={position}>
      <Popup>
        The official headquarters of <br /> <a href="/">www.the-daily-pulse.com</a>
      </Popup>
    </Marker>     
     </MapContainer>
    </div>
  );
};

export default Map;
