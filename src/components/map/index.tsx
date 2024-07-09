"use client";
import { Coords } from "@/data/types";
import { sanFranciscoCoords } from "@/data/utils";
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

interface Props {
  markers?: MarkerProps[];
}

export interface MarkerProps {
  id: string;
  coords: Coords;
  name: string;
}

//  leaflet doesn't supports SSR, so we need to use dynamic import

/** Leaflet map wrapper */
export function Map({ markers }: Props) {
  return (
    <MapContainer center={sanFranciscoCoords as any as LatLngTuple} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers?.map((x) => (
        <Marker key={x.id} position={x.coords as any}>
          <Popup>{x.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
