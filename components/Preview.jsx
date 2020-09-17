import React from "react";
import { Box } from "rebass/styled-components";
import { useDrop } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import { useComponents } from "../contexts/ComponentsContext";
import ComponentName from "../components/ComponentName";

const PreviewComponents = {
  ComponentName,
};

export default function Preview() {
  const { components, setComponents } = useComponents();
  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: DRAG_TYPES.COMPONENT,
    drop(item, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      console.log("item dropped!", item);
      const componentStructure = {
        name: item.id,
        props: {},
      };
      setComponents((prevValue) => [...prevValue, componentStructure]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });

  const componentPreview =
    components.length > 0 &&
    components.map((component, index) => {
      if (typeof PreviewComponents[component.name] !== "undefined") {
        return React.createElement(PreviewComponents[component.name], {
          // @TODO: Use a hash here?
          key: index,
          ...component.props,
        });
      }
    });
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
