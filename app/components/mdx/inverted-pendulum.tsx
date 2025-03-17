"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  PlayCircle,
  Pause,
  ArrowLeftRight,
  GaugeCircle,
  AlertCircle,
} from "lucide-react";

// Define types for the system state and parameters
type SystemState = [number, number, number, number]; // [theta, z, thetaDot, zDot]
type DerivativeValues = [number, number, number, number];

interface PendulumSimulationProps {
  initialAngle?: number;
  width?: number;
  height?: number;
}

const PendulumSimulation: React.FC<PendulumSimulationProps> = ({
  initialAngle = 0.3,
  width = 400,
  height = 200,
}) => {
  // Simulation parameters
  const [theta, setTheta] = useState<number>(initialAngle); // Pendulum angle in radians
  const [cartPosition, setCartPosition] = useState<number>(0); // Cart position in simulation units
  const [running, setRunning] = useState<boolean>(false);

  // Physical parameters
  const g: number = 9.8; // Gravity (m/s^2)
  const l: number = 1.0; // Pendulum length (m)
  const m1: number = 0.25; // Pendulum mass (kg)
  const m2: number = 1.0; // Cart mass (kg)
  const b: number = 0.05; // Damping coefficient (Ns)

  // Animation frame reference
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  // State of the system [theta, z, thetaDot, zDot]
  const stateRef = useRef<SystemState>([theta, 0, 0, 0]);
  // Force input
  const forceRef = useRef<number>(0);

  // SVG parameters (for mapping simulation units to pixels)
  const svgWidth: number = width;
  const svgHeight: number = height;
  const svgCartCenterX: number = width / 2;
  const svgCartCenterY: number = (height * 2) / 3;
  const pendulumLength: number = height / 3; // Length in pixels
  const pixelsPerUnit: number = 100; // Conversion factor

  // Apply force to the cart
  const applyForce = (force: number): void => {
    forceRef.current = force;
  };

  // Calculate derivatives for RK4 integration
  const calculateDerivatives = (
    state: SystemState,
    force: number,
  ): DerivativeValues => {
    const [theta, z, thetaDot, zDot] = state;

    // Equations of motion matrices
    const M11: number = (l ** 2 / 3.0) * m1;
    const M12: number = (l / 2) * m1 * Math.cos(theta);
    const M21: number = M12;
    const M22: number = m1 + m2;

    const detM: number = M11 * M22 - M12 * M21;

    const P1: number = (l / 2) * m1 * g * Math.sin(theta);
    const P2: number =
      (l / 2) * m1 * thetaDot ** 2 * Math.sin(theta) + force - b * zDot;

    // Solve for accelerations
    const thetaDotDot: number = (M22 * P1 - M12 * P2) / detM;
    const zDotDot: number = (M11 * P2 - M21 * P1) / detM;

    return [thetaDot, zDot, thetaDotDot, zDotDot];
  };

  // RK4 integration step
  const rk4Step = (
    state: SystemState,
    force: number,
    dt: number,
  ): SystemState => {
    const k1: DerivativeValues = calculateDerivatives(state, force);

    const state2: SystemState = state.map(
      (val, idx) => val + (dt / 2) * k1[idx],
    ) as SystemState;
    const k2: DerivativeValues = calculateDerivatives(state2, force);

    const state3: SystemState = state.map(
      (val, idx) => val + (dt / 2) * k2[idx],
    ) as SystemState;
    const k3: DerivativeValues = calculateDerivatives(state3, force);

    const state4: SystemState = state.map(
      (val, idx) => val + dt * k3[idx],
    ) as SystemState;
    const k4: DerivativeValues = calculateDerivatives(state4, force);

    return state.map(
      (val, idx) =>
        val + (dt / 6) * (k1[idx] + 2 * k2[idx] + 2 * k3[idx] + k4[idx]),
    ) as SystemState;
  };

  // Animation loop
  const animationLoop = (time: number): void => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = time;
    }

    const deltaTime: number = Math.min(
      (time - previousTimeRef.current) / 1000,
      0.03,
    ); // In seconds, capped for stability
    previousTimeRef.current = time;

    if (running) {
      // Update system state using RK4 integration
      stateRef.current = rk4Step(stateRef.current, forceRef.current, deltaTime);

      // Extract the updated values
      setTheta(stateRef.current[0]);
      setCartPosition(stateRef.current[1]);
    }

    requestRef.current = requestAnimationFrame(animationLoop);
  };

  // Start animation when component mounts
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animationLoop);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [running]);

  // Convert simulation theta to SVG coordinates for the pendulum rod end
  const rodEndX: number = svgCartCenterX + pendulumLength * Math.sin(theta);
  const rodEndY: number = svgCartCenterY - pendulumLength * Math.cos(theta);

  // Cart dimensions
  const cartWidth: number = svgWidth / 4;
  const cartHeight: number = svgHeight / 7.5;
  const wheelRadius: number = cartHeight / 2.5;

  // Cart SVG position
  const cartX: number =
    svgCartCenterX - cartWidth / 2 + cartPosition * pixelsPerUnit;

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "ArrowLeft") {
        applyForce(-2.0);
      } else if (e.key === "ArrowRight") {
        applyForce(2.0);
      } else if (e.key === " ") {
        setRunning((prev) => !prev);
      }
    };

    const handleKeyUp = (e: KeyboardEvent): void => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        applyForce(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Reset function
  const resetSimulation = (): void => {
    stateRef.current = [initialAngle, 0, 0, 0];
    setTheta(initialAngle);
    setCartPosition(0);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 items-center">
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <button
            className="bg-primary hover:bg-palette-1 transition-colors duration-300 text-palette-4 border border-palette-4 font-bold py-1 px-4 rounded mr-2"
            onClick={() => setRunning(!running)}
          >
            {running ? "Pause" : "Start"}
          </button>
          <button
            className="bg-palette-2/10 backdrop-blur-md hover:bg-palette-3 text-palette-2 font-bold py-1 px-4 rounded mr-2"
            onClick={resetSimulation}
          >
            Reset
          </button>
        </div>
        <div className="bg-primary border border-palette-2 shadow-lg rounded p-4">
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          >
            {/* Ground line */}
            <line
              x1={svgWidth * 0.125}
              y1={svgCartCenterY + wheelRadius}
              x2={svgWidth * 0.875}
              y2={svgCartCenterY + wheelRadius}
              stroke="#0000AA"
              strokeWidth="2"
              strokeDasharray="5,5"
            />

            {/* Cart */}
            <rect
              id="cart"
              x={cartX}
              y={svgCartCenterY - cartHeight / 2}
              width={cartWidth}
              height={cartHeight}
              fill="#3366CC"
              stroke="black"
              strokeWidth="2"
            />

            {/* Wheels */}
            <circle
              id="wheel-left"
              cx={cartX + cartWidth * 0.2}
              cy={svgCartCenterY + cartHeight / 2}
              r={wheelRadius}
              fill="#32CD32"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              id="wheel-right"
              cx={cartX + cartWidth * 0.8}
              cy={svgCartCenterY + cartHeight / 2}
              r={wheelRadius}
              fill="#32CD32"
              stroke="black"
              strokeWidth="2"
            />

            {/* Pendulum rod */}
            <line
              id="pendulum-rod"
              x1={cartX + cartWidth / 2}
              y1={svgCartCenterY}
              x2={rodEndX}
              y2={rodEndY}
              stroke="#8B4513"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div>
        {/* Controls section */}
        <div className="rounded-lg">
          <h3 className="text-lg font-semibold text-palette-4 flex items-center mb-3">
            <PlayCircle className="mr-2" size={20} />
            Simulation Controls
          </h3>

          <div className="grid grid-cols-1 gap-2 mb-4">
            <div className="flex items-center text-palette-2">
              <ArrowLeftRight className="text-blue-500 mr-2" size={18} />
              <span className="text-palette-2">
                Use{" "}
                <span className="px-2 py-1 bg-primary/50 backdrop-blur-sm rounded text-sm mx-1">
                  ←
                </span>{" "}
                <span className="px-2 py-1 bg-primary/50 backdrop-blur-sm rounded text-sm mx-1">
                  →
                </span>{" "}
                arrow keys to apply force
              </span>
            </div>

            <div className="flex items-center text-palette-2">
              <Pause className="text-blue-500 mr-2" size={18} />
              <span>
                Press{" "}
                <span className="px-2 py-1 bg-primary/50 backdrop-blur-sm rounded text-sm mx-1">
                  Space
                </span>{" "}
                to pause/resume
              </span>
            </div>
          </div>

          {/* Measurements section */}
          <div>
            <h3 className="text-lg font-semibold text-palette-4 flex items-center mb-3">
              <GaugeCircle className="mr-1" size={20} />
              Current Measurements
            </h3>
            <div className="flex gap-2 justify-around text-sm">
              <div>
                <span className="text-palette-2">Angle:</span>
                <span className="ml-2 font-mono">
                  {((theta * 180) / Math.PI).toFixed(1)}°
                </span>
              </div>
              <div>
                <span className="text-palette-2">Cart Position:</span>
                <span className="ml-2 font-mono">
                  {cartPosition.toFixed(2)}m
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-palette-2 mt-2 italic flex items-center">
            <AlertCircle size={12} className="mr-1 text-palette-4" />
            This simulation is still a work in progress
          </p>
        </div>
      </div>
    </div>
  );
};

export default PendulumSimulation;
