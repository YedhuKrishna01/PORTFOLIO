import React from "react";
import Navbar from "../components/Navbar";
import Works3D from "../components/Works3D";
import WorksDesigns from "../components/WorksDesigns";
import WorksDevop from "../components/WorksDevop";

function Works() {
  return (
    <div>
      <Navbar />
      <Works3D />
      <WorksDesigns />
      <WorksDevop />
    </div>
  );
}

export default Works;
