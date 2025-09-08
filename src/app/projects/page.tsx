"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const categories = ["All", "Webb", "App", "Game", "Figma", "Illustrations"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of my projects in web and app development, design, and game development.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full border transition ${
                  category === selectedCategory
                    ? "bg-primary text-white"
                    : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projektrutor */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                onClick={() => (window.location.href = `/projects/${project.slug}`)}
                className="cursor-pointer rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition flex flex-col justify-between h-full"
              >
                <div>
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <img
                      src={Array.isArray(project.image) ? project.image[0] : project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-0">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Code & Demo länkarna */}
                <div className="flex gap-3 p-6 pt-0 mt-auto">
                  {project.codeURL && (
                    <a
                      href={project.codeURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // <--- viktigt
                      className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-primary transition border border-gray-300 rounded"
                    >
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // <--- viktigt
                      className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-primary transition border border-gray-300 rounded"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
