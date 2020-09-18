import React, { useCallback } from "react";
import { Box } from "rebass/styled-components";
import { useDrop } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import { useComponents } from "../contexts/ComponentsContext";

export default function PreviewContainer({
  index,
  focused = false,
  onClick,
  children,
  ...restProps
}) {
  const { components, setComponents } = useComponents();
  // Handle dropping components for nested children
  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: DRAG_TYPES.COMPONENT,
    drop(item, monitor) {
      const didDrop = monitor.didDrop();
      console.log("item dropped on component!", item, didDrop);

      if (didDrop) {
        return;
      }
      setComponents((prevValue) => {
        const childComponent = {
          name: item.id,
          props: {},
          children: [],
        };
        const componentStructure = {
          ...prevValue[index],
          children: [...prevValue[index].children, childComponent],
        };
        return [
          ...prevValue.slice(0, index),
          componentStructure,
          ...prevValue.slice(index + 1, prevValue.length + 1),
        ];
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });
  const clickHandler = useCallback(() => {
    onClick(index);
  }, [onClick]);
  return (
    <Box
      ref={drop}
      onClick={clickHandler}
      sx={{ border: focused && "1px solid blue" }}
      {...restProps}
    >
      {children}
    </Box>
  );
}
