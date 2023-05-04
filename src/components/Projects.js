import React from 'react';
import Project from './Project';
import sharedLunchImg from '../images/shared-lunch.gif';
import miphyImg from '../images/miphy.gif';
import codingQuizImg from '../images/coding-quiz.gif';
import weatherDashboardImg from '../images/weather-dashboard.gif';
import flameChatImg from '../images/flame-chat.gif';


function Projects() {
    
    const projects = [
        {
            id: 0,
            description: "A blog site to coordinate food donations.",
            image: sharedLunchImg,
            deployed: 'https://shared-lunch.herokuapp.com/',
            github: 'https://github.com/jtich40/shared-lunch'
        },
        {
            id: 1,
            description: "A search engine that finds GIFs for your favorite movies.",
            image: miphyImg,
            deployed: 'https://jtich40.github.io/miphy/',
            github: 'https://github.com/jtich40/miphy'
        },
        {
            id: 2,
            description: "A simple command-line application to manage employee information.",
            image: codingQuizImg,
            deployed: 'https://shared-lunch.herokuapp.com/',
            github: 'https://github.com/jtich40/employee-database'
        },
        {
            id: 3,
            description: "A weather app that provides the current and 5-day forecast.",
            image: weatherDashboardImg,
            deployed: 'https://jtich40.github.io/weather-dashboard/',
            github: 'https://github.com/jtich40/weather-dashboard'
        },
        {
            id: 4,
            description: "A timed coding quiz with multiple choice questions.",
            image: codingQuizImg,
            deployed: 'https://jtich40.github.io/coding-quiz/',
            github: 'https://github.com/jtich40/shared-lunch'
        },
        {
            id: 5,
            description: "A backend social network application.",
            image: flameChatImg,
            deployed: 'https://github.com/jtich40/social-network',
            github: 'https://github.com/jtich40/social-network'
        }
    ]
    
    return(
      <section class="container-fluid min-vh-100 text-center" id="projects">
      <div class="row justify-content-center pt-3">
          <h2 class="projects-title">Projects</h2>
      </div>
      <div class="row px-5 pb-5">
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
  </section>
    )
}

export default Projects;