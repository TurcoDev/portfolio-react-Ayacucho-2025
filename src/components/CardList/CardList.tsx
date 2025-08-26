import { useContext, useEffect, useState } from "react";
import type { CardProps } from "../../interfaces/cardProps";
import { ThemeContext } from "../../hooks/theme-context";


function CardList() {
  const [projects, setProjects] = useState([]);
    const { theme, setTheme } = useContext(ThemeContext);
  
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

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
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
      </button>
    </>
  );
}

export default CardList;