// src/app/cv/page.tsx
"use client";

import { Download, MapPin, Mail, Phone, Calendar, Linkedin, Github } from "lucide-react";

export default function CVPage() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume (PDF)
            </a>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">
              Alicia Lundberg - <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">Resume</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
                {/* Profile picture */}
                <div className="bg-white rounded-xl shadow p-6">
                <div className="w-35 h-35 rounded-xl overflow-hidden mx-auto mb-4">
                    <img
                    src="/img/Alicia.jpeg"
                    alt="Alicia Lundberg"
                    className="w-full h-full object-cover"
                    />
                </div>
              </div>
              {/* Contact Info */}
                <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-3">
                    <div className="flex items-center">
                    <Mail className="h-4 w-4 text-indigo-500 mr-3" />
                    <span className="text-sm">alicia_lundberg@hotmail.com</span>
                    </div>
                    <div className="flex items-center">
                    <Phone className="h-4 w-4 text-indigo-500 mr-3" />
                    <span className="text-sm">+46 73 833 22 89</span>
                    </div>
                    <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-indigo-500 mr-3" />
                    <span className="text-sm">Lund, Sverige</span>
                    </div>
                    <div className="flex items-center">
                    <Linkedin className="h-4 w-4 text-indigo-500 mr-3" />
                    <a
                        href="https://www.linkedin.com/in/alicia-lundberg-99a148226/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-600 hover:underline"
                    >
                        LinkedIn
                    </a>
                    </div>
                    <div className="flex items-center">
                    <Github className="h-4 w-4 text-indigo-500 mr-3" />
                    <a
                        href="https://github.com/Alicia-Lundberg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-600 hover:underline"
                    >
                        Github
                    </a>
                    </div>
                </div>
                </div>


              {/* Skills */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Competences</h3>
                <div className="space-y-4">
                  {[
                    { title: "Project Management & Leadership", skills: ["Leading cross-functional teams", "Managing web & app development projects","Client communication & stakeholder management","Problem-solving & decision-making", "Agile Methodologies"] },
                    { title: "Programming", skills: ["Java", "Javascript", "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "C#", "C++", "Firebase", "MySQL", "Git", "Flutter", "Python"] },
                    { title: "Design & Game Development", skills: ["Figma", "Blender", "Unity", "Maya", "Inkscape", "Linearity"] },
                    { title: "Sales & Business Development", skills: ["Customer acquisition", "Building and managing partnerships", "Sales & strategic outreach"] },
                    { title: "Recruitment & Talent Acquisition", skills: ["Headhunting & interviewing", "Hiring & onboarding"] }
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
    

              {/* Experience */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-6">Work experience</h2>
                {[
                  {
                    role: "Regional Director",
                    company: "We Know IT",
                    period: "Jan 2025 - Present",
                    tasks: [
                      "Promoted to Regional Director with responsibility for leading and developing the Skåne region in alignment with We Know IT’s strategies and goals. Expanded the company's presence through sales, customer acquisition, and strategic partnerships. Led talent acquisition efforts, including headhunting, interviewing, hiring, and onboarding, while continuing to lead projects."
                    ]
                  },
                  {
                    role: "Project Manager",
                    company: "We Know IT",
                    period: "Sep 2024 - Present",
                    tasks: [
                      "Responsible for leading the development of high-quality digital platforms, including custom web and mobile applications. Managed cross-functional teams of developers and designers using Agile methodologies to ensure efficient iterative workflow and smooth collaboration. Acted as the main point of contact for clients, translating their needs into functional digital solutions and overseeing the process from concept to delivery with a focus on functionality and user experience."
                    ]
                  },
                  {
                    role: "Frontend Developer",
                    company: "Pentronic",
                    period: "Jun 2024 - Aug 2024",
                    tasks: [
                      "Initiated and led the frontend development of a responsive web application from scratch, focusing on UI/UX design. Researched and tested various libraries to determine the best technologies for the project. Built interactive measurement graphs and ensured a seamless experience across devices. Designed custom icons and graphics in Inkscape to enhance the user interface."
                    ]
                  },
                  {
                    role: "Team Leader",
                    company: "Ica Maxi Västervik",
                    period: "Jan 2021 - Aug 2021",
                    tasks: [
                      "Led a team of approximately 20 employees responsible for online food ordering and grocery delivery. My role involved customer service, team leadership, scheduling, and recruitment."
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
                    <div className="text-gray-600 space-y-1">
                      {job.tasks.map((task) => (
                        <p key={task}>{task}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-6">Utbildning</h2>
                <div className="border-l-2 border-indigo-500 pl-6">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold">M.Sc in Information and Communication Engineering Technologies</h3>
            
                  </div>
                  <p className="text-indigo-500 font-medium">LTH - Faculty of Engineering, Lund University</p>
                </div>
              </div>

              {/* Projects and associations */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-4">Projects and Associations</h2>
                <h4 className="text font-semibold text-gray-400 mb-2">D-Guild LTH</h4>

                <h3 className="text-lg font-semibold mb-2">Member of introduction coordinators</h3>
                <p className="text-gray-600 leading-relaxed">        
                    I was part of the group responsible for creating and hosting events for new students.
                </p>

                <h3 className="text-lg font-semibold mb-2">Member of Corporate Relations committee </h3>
                <p className="text-gray-600 leading-relaxed">        
                    Arranging lunch lectures, pubs and other events for the benefit of both our members and companies.
                </p>
                
                <h4 className="text font-semibold text-gray-400 mb-2 mt-6">Alten</h4>
                <h3 className="text-lg font-semibold mb-2">Student Ambassador</h3>
                <p className="text-gray-600 leading-relaxed">          
                    I organized events to promote and enhance marketing and exposure activities towards LTH students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
