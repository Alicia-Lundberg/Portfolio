// src/app/cv/page.tsx
"use client";

import { Download, MapPin, Mail, Phone, Calendar } from "lucide-react";

export default function CVPage() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mitt <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">CV</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Min professionella bakgrund och erfarenheter
            </p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow"
            >
              <Download className="h-4 w-4 mr-2" />
              Ladda ner PDF
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Kontaktinfo</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-indigo-500 mr-3" />
                    <span className="text-sm">din.email@exempel.se</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-indigo-500 mr-3" />
                    <span className="text-sm">+46 70 123 45 67</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-indigo-500 mr-3" />
                    <span className="text-sm">Stockholm, Sverige</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Tekniska färdigheter</h3>
                <div className="space-y-4">
                  {[
                    { title: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
                    { title: "Backend", skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
                    { title: "Design & Spel", skills: ["Figma", "Adobe CS", "Unity", "Godot"] }
                  ].map((section) => (
                    <div key={section.title}>
                      <h4 className="font-medium mb-2">{section.title}</h4>
                      <div className="flex flex-wrap gap-1">
                        {section.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Språk</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Svenska</span>
                    <span className="text-indigo-500">Modersmål</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engelska</span>
                    <span className="text-indigo-500">Flytande</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Professional Summary */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-4">Professionell sammanfattning</h2>
                <p className="text-gray-600 leading-relaxed">
                  Passionerad fullstack-utvecklare med stark bakgrund inom modern webbutveckling, 
                  design och spelutveckling. Erfaren av att arbeta med React, Node.js och moderna 
                  utvecklingsverktyg. Driven av att skapa användarvänliga och visuellt tilltalande 
                  digitala lösningar.
                </p>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-6">Arbetslivserfarenhet</h2>
                {[
                  {
                    role: "Frontend Utvecklare",
                    company: "Tech Startup AB",
                    period: "2023 - Nu",
                    tasks: [
                      "Utvecklade responsiva webbapplikationer med React och TypeScript",
                      "Samarbetade i agila team för att leverera användarvänliga lösningar",
                      "Implementerade modern UI/UX design med Tailwind CSS"
                    ]
                  },
                  {
                    role: "Fullstack Utvecklare",
                    company: "Digital Agency",
                    period: "2022 - 2023",
                    tasks: [
                      "Byggde e-handelslösningar med modern JavaScript-stack",
                      "Designade och implementerade RESTful APIs",
                      "Optimerade applikationsprestanda och användarupplevelse"
                    ]
                  }
                ].map((job) => (
                  <div key={job.role} className="border-l-2 border-indigo-500 pl-6 mb-6 last:mb-0">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      <div className="flex items-center ml-auto text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <p className="text-indigo-500 font-medium mb-2">{job.company}</p>
                    <ul className="text-gray-600 space-y-1">
                      {job.tasks.map((task) => (
                        <li key={task}>• {task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-6">Utbildning</h2>
                <div className="border-l-2 border-indigo-500 pl-6">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold">Kandidatexamen i Datavetenskap</h3>
                    <div className="flex items-center ml-auto text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      2019 - 2022
                    </div>
                  </div>
                  <p className="text-indigo-500 font-medium">KTH Kungliga Tekniska Högskolan</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-6">Certifieringar</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>AWS Certified Cloud Practitioner</span>
                    <span className="text-sm text-gray-500">2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Meta Frontend Developer Certificate</span>
                    <span className="text-sm text-gray-500">2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
