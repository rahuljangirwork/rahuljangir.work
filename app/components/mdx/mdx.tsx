import Link from "next/link";
import Image, { ImageProps } from "next/image";
import React from "react";
import Collapsible from "./collapsible";

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
  Collapsible,
};
