import React from "react";

const Background = () => {
  return (
    <div>
      <svg viewBox="0 0 700 700" width="700" height="700">
        <defs>
          <linearGradient
            gradientTransform="rotate(0, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="ffflux-gradient"
          >
            <stop stopColor="hsl(0, 0%, 0%)" stopOpacity="1" offset="0%"></stop>
            <stop
              stopColor="hsl(0, 0%, 27%)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
          <filter
            id="ffflux-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.003 0.005"
              numOctaves="2"
              seed="90"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feGaussianBlur
              stdDeviation="10 48"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              edgeMode="duplicate"
              result="blur"
            ></feGaussianBlur>
            <feBlend
              mode="saturation"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              in2="blur"
              result="blend"
            ></feBlend>
          </filter>
        </defs>
        <rect
          width="700"
          height="700"
          fill="url(#ffflux-gradient)"
          filter="url(#ffflux-filter)"
        ></rect>
      </svg>
    </div>
  );
};

export default Background;
