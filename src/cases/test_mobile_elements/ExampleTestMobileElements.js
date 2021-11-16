import React from "react";
import { useMedia } from "react-use";

const ExampleTestMobileElements = () => {
  const isMobileView = useMedia("(max-width: 425px)");

  return (
    <div>
      <h3>
        <span>{isMobileView ? "Mobile" : "Desktop"}</span>
        <p>view</p>
      </h3>
    </div>
  );
};

export default ExampleTestMobileElements;
