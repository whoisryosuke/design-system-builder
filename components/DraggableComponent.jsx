import React from "react";
import { Box } from "rebass/styled-components";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";

export default function DraggableComponent() {
  const [, drag] = useDrag({
    item: { id: "ComponentName", type: DRAG_TYPES.COMPONENT },
  });
  return (
    <Box ref={drag} width={100} height={100} bg="black" color="white">
      Component Name
    </Box>
  );
}
