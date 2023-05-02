import React from 'react';
import Project from './Project';

function Projects() {
    
    const projects = [
    {
        id: 0,
        description: "A blog site to coordinate food donations.",
        image: '../images/shared-lunch.gif',
        deployed: 'https://shared-lunch.herokuapp.com/',
        github: 'https://github.com/jtich40/shared-lunch'
    },
    {
        id: 1,
        description: "A search engine that finds GIFs for your favorite movies.",
        image: '../images/miphy.gif',
        deployed: 'https://jtich40.github.io/miphy/',
        github: 'https://github.com/jtich40/miphy'
    },
    {
        id: 2,
        description: "A simple command-line application to manage employee information.",
        image: '../images/coding-quiz.gif',
        deployed: 'https://shared-lunch.herokuapp.com/',
        github: 'https://github.com/jtich40/employee-database'
    },
    {
        id: 3,
        description: "A weather app that provides the current and 5-day forecast.",
        image: '../images/weather-dashboard.gif',
        deployed: 'https://jtich40.github.io/weather-dashboard/',
        github: 'https://github.com/jtich40/weather-dashboard'
    },
    {
        id: 4,
        description: "A timed coding quiz with multiple choice questions.",
        image: '../images/coding-quiz.gif',
        deployed: 'https://jtich40.github.io/coding-quiz/',
        github: 'https://github.com/jtich40/shared-lunch'
    },
    {
        id: 5,
        description: "A backend social network application.",
        image: '../images/flame-chat.gif',
        deployed: 'https://github.com/jtich40/social-network',
        github: 'https://github.com/jtich40/social-network'
        
    }

]
    return(
        <div>
        {projects.map((project) => (
          <Project
            key={project.id}
            description={project.description}
            image={project.image}
            deployed={project.deployed}
            github={project.github}
          />
        ))}
      </div>
    )
}

export default Projects;