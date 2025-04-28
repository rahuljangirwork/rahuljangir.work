"use client";

import { useState, useEffect } from "react";

// Standalone component that can be used in thumbnails or other contexts
export default function StandaloneBeamRenderer({
  autoPlay = true,
  force = 1000,
  youngModulus = 200,
  momentInertia = 1.83,
  animationDuration = 4000,
  scaleFactor = 1000,
  height = "full",
}: {
  autoPlay?: boolean;
  force?: number;
  youngModulus?: number;
  momentInertia?: number;
  animationDuration?: number;
  scaleFactor?: number;
  height?: string;
}) {
  // Animation control
  const [animating, setAnimating] = useState(autoPlay);
  const [animationProgress, setAnimationProgress] = useState(0);

  // Constant for beam length (in meters)
  const beamLength = 2; // 2 meters (200cm)

  // Convert values to consistent units
  const E = youngModulus * 1e9; // Convert GPa to Pa
  const I = momentInertia * 1e-6; // Convert 10^6 mm^4 to m^4

  // Function to calculate deflection at any point x along the beam
  const calculateDeflection = (x: number, forceValue: number): number => {
    // y = (F/EI)(Lx^2/2 - x^3/6)
    const deflection =
      (forceValue / (E * I)) * ((beamLength * x * x) / 2 - (x * x * x) / 6);

    // Scale deflection for visualization
    return deflection * scaleFactor; // Scaling factor for visual clarity
  };

  // Generate points for the deflection curve
  const generateBeamPoints = (
    forceValue: number,
  ): Array<{ x: number; y: number }> => {
    const numPoints = 50;
    const points: Array<{ x: number; y: number }> = [];

    for (let i = 0; i <= numPoints; i++) {
      const x = (i / numPoints) * beamLength;
      const deflection = calculateDeflection(x, forceValue);

      // Convert to SVG coordinates (flip y-axis since SVG y increases downward)
      const svgX = (x / beamLength) * 100; // Convert to percentage of width
      const svgY = -deflection; // Negative because upward deflection

      points.push({ x: svgX, y: svgY });
    }

    return points;
  };

  // Animation effect
  useEffect(() => {
    if (!animating) return;

    let animationFrame: number;
    let startTime: number | null = null;
    const duration = animationDuration; // animation duration in ms

    const animate = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Calculate progress with a loop
      const normalizedTime = (elapsed % (duration * 2)) / duration;
      let progress;

      if (normalizedTime <= 1) {
        // Increasing force (0 to 1)
        progress = normalizedTime;
      } else {
        // Decreasing force (1 to 0)
        progress = 2 - normalizedTime;
      }

      setAnimationProgress(progress);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [animating, animationDuration]);

  // Calculate current force based on animation progress
  const currentForce = animating ? force * animationProgress : force;

  // Generate beam points for current force
  const beamPoints = generateBeamPoints(currentForce);

  // Format beam points for SVG path
  const formatBeamPath = (points: Array<{ x: number; y: number }>): string => {
    return points
      .map((point, index) =>
        index === 0 ? `M ${point.x},0` : `L ${point.x},${point.y}`,
      )
      .join(" ");
  };

  const beamPath = formatBeamPath(beamPoints);

  const heightClass = height === "full" ? "h-full" : `h-${height}`;

  return (
    <div
      className={`relative bg-primary shadow-lg rounded-lg border border-palette-2/10 ${heightClass} w-full`}
    >
      {/* Blueprint background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="grid-renderer"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(232, 223, 202, 0.5)"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-renderer)" />
        </svg>
      </div>

      {/* Main beam visualization */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 120 40"
          preserveAspectRatio="xMidYMid meet"
          className="overflow-visible"
        >
          {/* Center the coordinate system */}
          <g transform="translate(10, 20)">
            {/* Coordinate system */}
            <g className="coordinate-system">
              {/* X-axis */}
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="0"
                stroke="rgba(232, 223, 202, 0.6)"
                strokeWidth="0.2"
              />
              <text
                x="102"
                y="3"
                fontSize="3"
                fill="rgba(232, 223, 202, 0.8)"
                className="font-mono"
              >
                X
              </text>

              {/* X-axis ticks */}
              {[0, 25, 50, 75, 100].map((x) => (
                <g key={`x-tick-${x}`}>
                  <line
                    x1={x}
                    y1="-1"
                    x2={x}
                    y2="1"
                    stroke="rgba(232, 223, 202, 0.6)"
                    strokeWidth="0.2"
                  />
                  <text
                    x={x}
                    y="4"
                    fontSize="2"
                    fill="rgba(232, 223, 202, 0.8)"
                    textAnchor="middle"
                    className="font-mono"
                  >
                    {x === 0 ? "0" : `${x / 100}L`}
                  </text>
                </g>
              ))}

              {/* Y-axis */}
              <line
                x1="0"
                y1="-15"
                x2="0"
                y2="15"
                stroke="rgba(232, 223, 202, 0.6)"
                strokeWidth="0.2"
              />
              <text
                x="-3"
                y="-15"
                fontSize="3"
                fill="rgba(232, 223, 202, 0.8)"
                className="font-mono"
              >
                Y
              </text>

              {/* Y-axis ticks */}
              {[-10, -5, 0, 5, 10].map((y) => (
                <g key={`y-tick-${y}`}>
                  <line
                    x1="-1"
                    y1={y}
                    x2="1"
                    y2={y}
                    stroke="rgba(232, 223, 202, 0.6)"
                    strokeWidth="0.2"
                  />
                  <text
                    x="-3"
                    y={y + 0.7}
                    fontSize="2"
                    fill="rgba(232, 223, 202, 0.8)"
                    textAnchor="end"
                    className="font-mono"
                  >
                    {y}
                  </text>
                </g>
              ))}
            </g>

            {/* Fixed support */}
            <rect
              x="-3"
              y="-10"
              width="3"
              height="20"
              fill="#4F6F52"
              stroke="rgba(232, 223, 202, 0.6)"
              strokeWidth="0.2"
            />

            {/* Support hatching */}
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="-3"
                y1={-10 + (i + 1) * 2.5}
                x2="0"
                y2={-10 + i * 2.5}
                stroke="rgba(232, 223, 202, 0.6)"
                strokeWidth="0.2"
              />
            ))}

            {/* Initial beam position (reference) */}
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              stroke="#E8DFCA"
              strokeWidth="0.3"
              strokeDasharray="1,1"
            />

            {/* Beam line */}
            <path
              d={beamPath}
              fill="none"
              stroke="#F28D35"
              strokeWidth="0.8"
              strokeLinecap="round"
              className="transition-all duration-100"
            />

            {/* Force arrow */}
            {currentForce > 0 && (
              <g transform="translate(100, 0)">
                {/* Arrow shaft */}
                <line
                  x1="0"
                  y1={beamPoints[beamPoints.length - 1].y}
                  x2="0"
                  y2={beamPoints[beamPoints.length - 1].y - 6}
                  stroke="#F28D35"
                  strokeWidth="0.5"
                />
                {/* Arrow head */}
                <polygon
                  points={`0,${beamPoints[beamPoints.length - 1].y - 7} -1,${
                    beamPoints[beamPoints.length - 1].y - 5
                  } 1,${beamPoints[beamPoints.length - 1].y - 5}`}
                  fill="#F28D35"
                />
                {/* Force value */}
                <text
                  x="2"
                  y={beamPoints[beamPoints.length - 1].y - 3}
                  fontSize="3"
                  fill="#F28D35"
                  fontWeight="bold"
                  className="font-mono"
                >
                  {Math.round(currentForce)} N
                </text>
              </g>
            )}

            {/* Label the beam */}
            <text
              x="50"
              y="-12"
              fontSize="3"
              fill="#F28D35"
              textAnchor="middle"
              className="font-mono"
            >
              Cantilever Beam
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
