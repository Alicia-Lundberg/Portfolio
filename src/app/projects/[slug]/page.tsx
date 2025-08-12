import { notFound } from "next/navigation";

const projects = [
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "Fullstack e-handelsplattform byggd med React och Node.js...",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    slug: "mobile-app-design",
    title: "Mobile App Design",
    description: "Komplett UI/UX design för en fitness-tracking app...",
    image: "/placeholder.svg",
    technologies: ["Figma", "Adobe XD", "Prototyping"],
  },
  // ...
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-serif font-bold mb-6">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-xl mb-8"
      />
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
