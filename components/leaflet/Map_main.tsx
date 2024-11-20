"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression, LatLngTuple, DragEndEvent } from "leaflet";
import {Dash_card} from '@/components/mantine/Dash_Card';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

var cctvicon = L.icon({
    iconUrl: '/device-cctv-filled.png', // Replace with the actual path to your CCTV icon image
    iconSize:     [25, 25], // size of the icon
    iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
    popupAnchor:  [0,0] // point from which the popup should open relative to the iconAnchor
});

interface MapProps {
  CameraCoordinates: { location: string; posix: LatLngExpression | LatLngTuple; }[]
  zoom?: number;
}

const defaults = {
  zoom: 16,
};

const Map = ({ CameraCoordinates, zoom = defaults.zoom }: MapProps) => {

  // 마커 드래그 종료 시 좌표 업데이트 함수
  return (
    <MapContainer attributionControl={false} className="z-30" center={CameraCoordinates[0].posix} zoom={zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      ({CameraCoordinates.map((camera, idx) => (
            <div>
              <Marker icon={cctvicon} position={camera.posix} draggable={false} >
                <Popup maxWidth={99999} key={idx}>   
                  <div className="w-[30vw]">
                  <Dash_card url='@/DummyDB/Ardea.mp4' />
                  </div>
                </Popup>
                
              </Marker>
            </div>
      ))})
      
    </MapContainer>
  );
};

export default Map;
