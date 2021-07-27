import React from "react";
import { Link } from "react-router-dom";

const StreamList = () => {
  return (
    <div>
      <h1>StreamList</h1>
      <Link to="/show">Navigate to stream show</Link>
    </div>
  );
};

export default StreamList;
