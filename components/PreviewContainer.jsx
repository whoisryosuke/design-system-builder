import React, { useCallback } from "react";
import { Box } from "rebass/styled-components";

export default function PreviewContainer({
  index,
  focused = false,
  onClick,
  children,
  ...restProps
}) {
  const clickHandler = useCallback(() => {
    onClick(index);
  }, [onClick]);
  return (
    <Box
      onClick={clickHandler}
      sx={{ border: focused && "1px solid blue" }}
      {...restProps}
    >
      {children}
    </Box>
  );
}
