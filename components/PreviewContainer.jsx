import React, { useCallback, useState } from "react";
import { Box } from "rebass/styled-components";

export default function PreviewContainer({ children, ...restProps }) {
  const [focused, setFocused] = useState(false);

  const clickHandler = useCallback(() => {
    setFocused((prevState) => !prevState);
  }, [setFocused]);
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
