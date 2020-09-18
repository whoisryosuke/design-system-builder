import React from "react";
import ComponentName from "../components/ComponentName";
import PreviewContainer from "./PreviewContainer";

const PreviewComponents = {
  ComponentName,
};

export default function PreviewComponent({
  component,
  index,
  focused,
  clickHandler,
}) {
  if (typeof PreviewComponents[component.name] !== "undefined") {
    const walkChildren = (children) => {
      if (children.length > 0) {
        return children.map((childComponent) => {
          const NewChildComponent = React.createElement(
            PreviewComponents[childComponent.name],
            {
              ...childComponent.props,
              children: walkChildren(childComponent.children),
            }
          );
          return React.createElement(
            PreviewContainer,
            {
              index,
              onClick: clickHandler,
              focused: focused === index ? true : false,
            },
            [NewChildComponent]
          );
        });
      }
      if (typeof children === "string") {
        return children;
      }
    };
    const NewComponent = React.createElement(
      PreviewComponents[component.name],
      {
        // @TODO: Use a hash here?
        key: index,
        ...component.props,
        children: walkChildren(component.children),
      }
    );
    return React.createElement(
      PreviewContainer,
      {
        index,
        onClick: clickHandler,
        focused: focused === index ? true : false,
      },
      [NewComponent]
    );
  }
}
