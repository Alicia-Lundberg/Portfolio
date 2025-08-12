export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
      <p>Du kan nå mig via:</p>
      <ul className="list-disc pl-5">
        <li>Email: <a href="mailto:dinmail@example.com" className="text-blue-600">dinmail@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/dittnamn" target="_blank" className="text-blue-600">Profil</a></li>
        <li>GitHub: <a href="https://github.com/dittnamn" target="_blank" className="text-blue-600">Profil</a></li>
      </ul>
    </section>
  );
}
