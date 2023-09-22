import React from "react";
import Image from "next/image";
import importAllImages from "@/utils/ImportImages";
const imageContext = require.context("../assets", false, /\.(png|jpe?g|svg)$/); // Adjust the file extensions as needed
const images = importAllImages(imageContext);

const Project = (props) => {
  const title = props.title;
  const url = props.url;
  const fileName = props.fileName.toLowerCase();

  // Filter images based on fileName and select the first one
  const projectImg = images.find((image) => image.default.src.includes(fileName));

  return (
    <a target="_blank" href={url} className="project">
      <div className="img">
        <Image src={projectImg?.default?.src} alt="Project thumbnail" width={300} height={200} />
      </div>
      <div className="name">{title}</div>
    </a>
  );
};

export default Project;
