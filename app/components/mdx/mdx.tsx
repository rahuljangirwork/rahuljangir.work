import Link from "next/link";
import React from "react";
import Dropdown from "./dropdown";
import WanderBehaviorDiagram from "./wander-behavior-diagram";
import RobotScene from "./robot-scene";
import WorkInProgress from "./work-in-progress";
import {
  InvertedPendulumSimulation,
  InvertedPendulumSVG,
} from "./inverted-pendulum";
import Noteworthy from "./noteworthy";
import BeamAnimation from "./beam-animation";
// import here to avoid circular dependency issues
import GeCarousel from "./geCarousel";
import { PhotoGallery } from "@/app/components/ui/gallery";

type TableProps = {
  data: {
    headers: string[];
    rows: string[][];
  };
};

const Table: React.FC<TableProps> = ({ data }) => {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const { href } = props;

  if (href && href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href && href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export const CustomMDXComponents = {
  a: CustomLink,
  Table,
  Dropdown,
  RobotScene,
  WanderBehaviorDiagram,
  WorkInProgress,
  InvertedPendulumSimulation,
  InvertedPendulumSVG,
  Noteworthy,
  BeamAnimation,
  GeCarousel,
  PhotoGallery,
};
