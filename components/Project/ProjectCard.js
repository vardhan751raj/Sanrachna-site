// ProjectCard.js

import React from "react";
import styles from "./ProjectCard.module.scss"; // Import the module styles

const ProjectCard = ({ project }) => {
  const { photo, name, location, projectType } = project;

  return (
    <div className={styles["project-card"]}>
      <img
        src={photo}
        alt={`${name} Photo`}
        className={styles["project-photo"]}
      />
      <div className={styles["project-details"]}>
        <h3 className={styles["h3"]}>{name}</h3>
        <p className={styles["location"]}>{location}</p>
        <p className={styles["project-type"]}>{projectType}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
