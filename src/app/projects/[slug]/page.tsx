interface Props {
  params: { slug: string };
}

export default function ProjectDetail({ params }: Props) {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">{params.slug.replace("-", " ")}</h1>
      <p>Här kommer en detaljerad beskrivning av projektet.</p>

      {/* Exempel på att bädda in ett Unity-spel */}
      {/* <iframe src="/games/mitt-unity-spel/index.html" width="960" height="600" /> */}
    </section>
  );
}
