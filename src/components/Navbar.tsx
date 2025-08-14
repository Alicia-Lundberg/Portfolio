"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/cv", label: "Resume" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div
        className="
          flex items-center justify-between h-16 
          px-4 sm:px-6 lg:px-12 
          max-w-[1600px] mx-auto
        "
      >
        <Link
          href="/"
          className="text-primary font-serif font-bold text-xl lg:text-2xl"
        >
          Portfolio
        </Link>
        <div className="flex space-x-4 lg:space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 lg:px-5 lg:py-3 
                  text-base lg:text-lg 
                  font-medium rounded-full transition
                  ${
                    isActive
                      ? "text-primary bg-primary/10 shadow-sm"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
