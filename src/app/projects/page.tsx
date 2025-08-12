import Link from "next/link";

const projects = [
  {
    slug: "mitt-unity-spel",
    title: "Mitt Unity-spel",
    image: "/img/unitygame.png",
    summary: "Ett 2D-spel byggt i Unity med WebGL-export.",
  },
  {
    slug: "webbapp",
    title: "Webbapp",
    image: "/img/webapp.png",
    summary: "En modern webbapplikation byggd i React och Next.js.",
  }
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Mina projekt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <Link
            key={proj.slug}
            href={`/projects/${proj.slug}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg"
          >
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{proj.title}</h2>
              <p>{proj.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
