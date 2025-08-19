import { useEffect, useState } from "react";
import type { CardProps } from "../../interfaces/cardProps";


function CardList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProjects(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <p> {projects.length} projects found</p>
      <ul>
        {projects.map((project: CardProps, index: number) => (
          <li key={index}>{project.title}</li>
        ))}
      </ul>
    </>
  );
}

export default CardList;