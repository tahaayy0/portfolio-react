import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-200">
      <h2 className="text-4xl font-bold text-center">Projelerim</h2>
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 mt-4 inline-block">Detaylar</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
