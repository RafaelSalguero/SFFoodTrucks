"use client";
import { Coords } from "@/data/types";
import { LatLngTuple } from "leaflet";
import dynamic from "next/dynamic";
import React from "react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  {
    ssr: false,
  }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  {
    ssr: false,
  }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  {
    ssr: false,
  }
);

const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export const sanFranciscoCoords: Coords = [37.7577607, -122.4787994] as const;

//  leaflet doesn't supports SSR, so we need to use dynamic import
export function Map() {
  return (
    <MapContainer center={sanFranciscoCoords as any as LatLngTuple} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>This is a popup</Popup>
      </Marker>
    </MapContainer>
  );
}
