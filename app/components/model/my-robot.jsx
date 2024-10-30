import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function MyRobot({ ...props }) {
  const { nodes } = useGLTF("../../model/robot.gltf", true);

  const solidModelParts = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
      color: 0xf28d35,
      metalness: 0.9,
      roughness: 0.3,
    });

    return Object.entries(nodes)
      .map(([key, node]) => {
        if (node.geometry) {
          return {
            key,
            geometry: node.geometry,
            material: material,
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [nodes]);

  return (
    <group {...props} dispose={null}>
      {solidModelParts.map(({ key, geometry, material }) => (
        <mesh key={key} geometry={geometry} material={material} />
      ))}
    </group>
  );
}

useGLTF.preload("model/robot.gltf");
