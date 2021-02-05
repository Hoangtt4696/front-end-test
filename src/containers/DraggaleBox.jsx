import React, { memo, useState } from 'react';
import Draggable from 'react-draggable';

const DraggableBox = () => {
  const defaultBoxSize = 200;
  const defaultCircleSize = 100;
  const [posCircle, setPosCircle] = useState({ x: defaultBoxSize, y: defaultBoxSize });
  const handleDrag = (e, ui) => {
    setPosCircle({ x: ui.x, y: ui.y });
  };
  const { x: circleX, y: circleY } = posCircle;
  const isOverlap =
    circleX > -(defaultBoxSize + defaultCircleSize) &&
    circleX < 0 &&
    circleY > -(defaultCircleSize + defaultCircleSize / 2) &&
    circleY < defaultCircleSize + defaultCircleSize / 2;
  const overlapClass = isOverlap ? 'circle-overlap-bg' : 'circle-default-bg';

  return (
    <div className="container">
      <div className="box-container" name="box" />
      <Draggable name="circle" onDrag={handleDrag} bounds="parent">
        <div className={`circle-container ${overlapClass}`} name="circle" />
      </Draggable>
    </div>
  );
};

export default memo(DraggableBox);
