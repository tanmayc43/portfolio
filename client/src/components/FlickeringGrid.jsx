"use client";

import React from "react";
import { FlickeringGrid as MagicUIFlickeringGrid } from "./magicui/flickering-grid";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function FlickeringGrid() {
  return (
    <div className="fixed inset-0 z-[-1] min-h-screen w-full bg-black">
      <MagicUIFlickeringGrid
        squareSize={4}  
        gridGap={9}
        color="#ffffff"
        maxOpacity={0.25}
        flickerChance={0.20}
        className="h-full w-full"
      />
    </div>
  );
}
