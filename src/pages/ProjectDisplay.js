import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import '../styles/ProjectDisplay.css';
function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
        {
            project ? (
            <>
                <h1>{project?.name}</h1>
                <img src={project?.image} />
                <p><b>Skills:</b> {project?.skills}</p>
                <GitHubIcon />
            </>) : <h4><b style={{color:'red'}}>Project Id Invalid</b></h4>
        }
      
    </div>
  );
}
export default ProjectDisplay;
