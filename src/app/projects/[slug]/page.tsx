/******** DETAILED PROJECT PAGE ************/
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProjectCarousel from "./ProjectCarousel";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Button */}
          <Button asChild variant="outline" className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {project.category && (
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {project.category}
                </span>
              )}
              {project.date && (
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(project.date).toLocaleDateString("sv-SE")}
                </div>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          

          {/* Main Content: Image + Sidebar */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Image */}
            <div className="flex-1">
              {Array.isArray(project.image) ? (
                <ProjectCarousel images={project.image} />
              ) : (
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
       

            {/* Sidebar: Technologies + Project Info */}
            <div className="w-full md:w-80 space-y-6">
              {/* Technologies */}
              {project.technologies && (
                <div className="rounded-xl border p-6">
                  <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div className="rounded-xl border p-6">
                <h3 className="text-lg font-semibold mb-4">Project info</h3>
                <div className="space-y-3">
                  {project.category && (
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Category
                      </span>
                      <p className="font-medium">{project.category}</p>
                    </div>
                  )}
                  {project.date && (
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Date
                      </span>
                      <p className="font-medium">
                        {new Date(project.date).toLocaleDateString("en-EN", {
                          year: "numeric",
                          month: "long",
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>


          {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.demo && (
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.codeURL && (
                  <Button asChild variant="outline">
                    <a
                      href={project.codeURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Show Code
                    </a>
                  </Button>
                )}
              </div>

          {/* About */}
          <div className="space-y-8">
            {project.longDescription && (
              <div className="rounded-xl border p-6">
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            )}
            {/* Functions */}
            {project.features && (
              <div className="rounded-xl border p-6">
                <h2 className="text-2xl font-semibold mb-4">Functions</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/*
            
            {project.learned && (
              <div className="rounded-xl border p-6">
                <h2 className="text-2xl font-semibold mb-4">What I learned</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.learned}
                </p>
              </div>
            )}
            */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
