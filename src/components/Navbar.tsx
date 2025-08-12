import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex gap-6">
        <li><Link href="/">Om mig</Link></li>
        <li><Link href="/projects">Projekt</Link></li>
        <li><Link href="/cv">CV</Link></li>
        <li><Link href="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
}
