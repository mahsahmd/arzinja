import React, { useState } from "react";
import { Map, Draggable } from "pigeon-maps";

interface MyMapProps {
  onSubmit: () => void;
}
const MyMap = ({ onSubmit }: MyMapProps) => {
  const [anchor, setAnchor] = useState<[number, number]>([50.879, 4.6997]);
  return (
    <>
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
          <p>test</p>
        </Draggable>
      </Map>
      <button onClick={onSubmit}>click</button>
    </>
  );
};

export default MyMap;
