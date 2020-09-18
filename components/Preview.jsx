import React, { useCallback, useState } from "react";
import { Box } from "rebass/styled-components";
import { useDrop } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import { useComponents } from "../contexts/ComponentsContext";
import PreviewComponent from "./PreviewComponent";

export default function Preview() {
  const [focused, setFocused] = useState(null);
  const { components, setComponents } = useComponents();
  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: DRAG_TYPES.COMPONENT,
    drop(item, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      console.log("item dropped on preview!", item, didDrop);
      const componentStructure = {
        name: item.id,
        props: {},
        children: [],
      };
      setComponents((prevValue) => [...prevValue, componentStructure]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  const clickHandler = useCallback(
    (index) => {
      if (focused === index) setFocused(null);
      setFocused(index);
    },
    [focused, setFocused]
  );

  console.log("the components", components);
  const componentPreview =
    components.length > 0 &&
    components.map((component, index) => (
      <PreviewComponent
        index={index}
        component={component}
        clickHandler={clickHandler}
        focused={focused}
      />
    ));
  return (
    <Box
      ref={drop}
      width="400px"
      height="100vh"
      sx={{ border: "1px solid black" }}
    >
      {componentPreview}
    </Box>
  );
}
