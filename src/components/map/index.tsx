import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import { MapModalContent, MapWrapper, SelectLocationButton } from "./styles";

interface MyMapProps {
  onSubmit: () => void;
}

const MyMap = ({ onSubmit }: MyMapProps) => {
  const [markerPosition, setMarkerPositionr] = useState<[number, number]>([
    35.740314, 51.351689,
  ]);
  interface handleMapChangeProps {
    latLng: [number, number];
  }
  const handleMapChange = ({ latLng }: handleMapChangeProps) => {
    setMarkerPositionr(latLng);
  };
  return (
    <MapModalContent>
      <MapWrapper>
        <Map onClick={handleMapChange} center={[35.740314, 51.35168]} zoom={15}>
          <Marker anchor={markerPosition} payload={1} />

          <Overlay anchor={[35.740314, 51.35168]} offset={[120, 79]}></Overlay>
        </Map>
      </MapWrapper>
      <SelectLocationButton onClick={onSubmit}>
        Choose Location
      </SelectLocationButton>
    </MapModalContent>
  );
};

export default MyMap;
