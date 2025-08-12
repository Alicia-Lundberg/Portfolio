import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

// Projektdata
const projects = [
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    category: "Webbutveckling",
    description: "Fullstack e-handelsplattform byggd med React och Node.js",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    featured: true,
  },
  {
    slug: "mobile-app-design",
    title: "Mobile App Design",
    category: "Design",
    description: "Komplett UI/UX design för en fitness-tracking app",
    image: "/placeholder.svg",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
    featured: true,
  },
  {
    slug: "2d-platformer-game",
    title: "2D Platformer Game",
    category: "Spelutveckling",
    description: "Retro-inspirerat plattformsspel utvecklat i Unity",
    image: "/placeholder.svg",
    technologies: ["Unity", "C#", "Pixel Art"],
    featured: false,
  },
  // ...resten
];

const categories = ["Alla", "Webbutveckling", "Design", "Spelutveckling"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Mina <span className="text-primary">Projekt</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utforska mina senaste projekt inom webbutveckling, design och spelutveckling
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full border transition ${
                  category === "Alla"
                    ? "bg-primary text-white"
                    : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Utvalda projekt</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <div
                    key={project.slug}
                    className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                  >
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="px-3 py-2 border border-gray-300 rounded text-sm hover:border-primary hover:text-primary transition"
                        >
                          Läs mer
                        </Link>
                        <a
                          href="#"
                          className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-primary transition"
                        >
                          <Github className="h-4 w-4 mr-2" /> Kod
                        </a>
                        <a
                          href="#"
                          className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-primary transition"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" /> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Alla projekt</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block text-center px-3 py-2 border border-gray-300 rounded text-sm hover:border-primary hover:text-primary transition"
                    >
                      Visa projekt
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
