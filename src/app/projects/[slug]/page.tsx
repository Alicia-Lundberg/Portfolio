import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCarousel from "./ProjectCarousel";


export default function Page({ params }: any) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-serif font-bold mb-6">{project.title}</h1>

      {Array.isArray(project.image) ? (
        <ProjectCarousel images={project.image} />
      ) : (
        <img src={project.image} alt={project.title} className="w-full rounded-xl mb-8" />
      )}

      <p className="text-lg text-gray-700 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
