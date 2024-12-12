import type { ExcalidrawProps } from "@excalidraw/excalidraw/types/types";
import React, { useEffect, useState, type ComponentType } from "react";

function ExcalidrawWrapper() {
  const [ExcalidrawComp, setExcalidrawComp] =
    useState<ComponentType<ExcalidrawProps> | null>(null);

  useEffect(() => {
    // Dynamic import only on the client
    import("@excalidraw/excalidraw").then((mod) => {
      setExcalidrawComp(() => mod.Excalidraw as ComponentType<ExcalidrawProps>);
    });
  }, []);

  if (!ExcalidrawComp) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: "800px" }}>
      <ExcalidrawComp
        initialData={{}}
        onChange={(elements, state) => {
          console.log("Elements changed:", elements);
          console.log("Current state:", state);
        }}
      />
    </div>
  );
}

export default ExcalidrawWrapper;
