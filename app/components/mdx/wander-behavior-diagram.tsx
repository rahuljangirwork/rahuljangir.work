const WanderBehaviorDiagram = () => {
  return (
    <>
      <div className="border border-palette-2 bg-palette-2/10 backdrop-blur-sm rounded-md w-full max-w-md mx-auto">
        <div className="relative w-full" style={{ paddingBottom: "55%" }}>
          {/* 4:3 aspect ratio */}
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="5 20 450 250"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Definitions for arrowheads */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
              </marker>
              <marker
                id="arrowhead-white"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#E8DFCA" />
              </marker>
              <marker
                id="arrowhead-blue"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#2563eb" />
              </marker>
              <marker
                id="arrowhead-accent"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#F28D35" />
              </marker>
            </defs>

            {/* Ant */}
            <circle cx="100" cy="200" r="8" fill="#5c2f0f" />
            <text x="87" y="230" className="text-sm font-bold" fill="#E8DFCA">
              Ant
            </text>

            {/* Current velocity vector */}
            <line
              x1="100"
              y1="200"
              x2="170"
              y2="162"
              stroke="#2563eb"
              strokeWidth="2"
              markerEnd="url(#arrowhead-blue)"
            />
            <text x="160" y="155" className="text-sm font-bold" fill="#2563eb">
              v
            </text>

            {/* Wander circle */}
            <circle
              cx="250"
              cy="120"
              r="55"
              strokeWidth="1"
              strokeDasharray="5"
              fill="none"
              className="stroke-palette-2"
            />
            <circle cx="250" cy="120" r="2" fill="#E8DFCA" />
            <text x="285" y="65" className="text-sm" fill="#E8DFCA">
              Wander Circle
            </text>

            {/* Vector to wander circle center */}
            <line
              x1="100"
              y1="200"
              x2="250"
              y2="120"
              stroke="#000"
              strokeWidth="1"
              strokeDasharray="4"
              markerEnd="url(#arrowhead)"
            />
            <text x="220" y="148" className="text-xs">
              dw
            </text>

            {/* Wander target */}
            <circle cx="290" cy="160" r="4" fill="#F28D35" />
            <text x="305" y="165" className="text-sm" fill="#F28D35">
              Wander Target
            </text>

            {/* Wander target vector */}
            <line
              x1="250"
              y1="120"
              x2="290"
              y2="160"
              stroke="#F28D35"
              strokeWidth="1"
              markerEnd="url(#arrowhead-accent)"
            />
            <text x="265" y="131" className="text-xs" fill="#F28D35">
              wt
            </text>

            {/* Jitter circle */}
            <circle
              cx="290"
              cy="160"
              r="12"
              stroke="#dc2626"
              strokeWidth="1"
              strokeDasharray="2"
              fill="none"
            />
            <text x="285" y="185" className="text-xs" fill="#dc2626">
              Jitter circle
            </text>

            {/* acceleration vector */}
            <line
              x1="100"
              y1="200"
              x2="290"
              y2="160"
              stroke="#E8DFCA"
              strokeWidth="1"
              markerEnd="url(#arrowhead-white)"
            />
            <text x="200" y="200" className="text-sm" fill="#E8DFCA">
              a
            </text>
          </svg>
        </div>
      </div>
      <p className="text-sm text-center mt-2">
        Figure 1: Visualization of the wandering behavior algorithm
      </p>
    </>
  );
};

export default WanderBehaviorDiagram;
