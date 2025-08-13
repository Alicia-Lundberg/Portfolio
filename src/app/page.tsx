// app/page.tsx (Next.js 13+ med app router)
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Gamepad2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
            Hi! I am{" "}
            <span className="text-primary">Alicia</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Curious mind and dedicated creator, combining leadership, design, and development to bring ideas to life.
            Driven by questions, shaped by creativity, built with intention.
          </p>
        </div>

  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
    <Button
      asChild
      size="lg"
      className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-8"
    >
      <Link href="/projects">
        Explore my projects <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </Button>
    {/* <Button
      asChild
      variant="outline"
      size="lg"
      className="border-primary text-primary hover:bg-primary/5 rounded-full px-8"
    >
      <Link href="/contact">Låt oss prata</Link>
    </Button> */}
  </div>

  {/* Skills Preview */}
  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {/* Leadership & Project Management */}
    <div className="rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
      <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Code className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-serif font-medium mb-3">
        Leadership & Project Management
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        I enjoy bringing people together to make things happen. My background as a regional manager and project leader has taught me the value of trust, clear communication, and keeping a team moving in the same direction.
      </p>
    </div>

    {/* UX & Interaction Design */}
    <div className="rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
      <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Palette className="h-8 w-8 text-teal-400" />
      </div>
      <h3 className="text-xl font-serif font-medium mb-3">UX & Interaction Design</h3>
      <p className="text-muted-foreground leading-relaxed">
        I’m curious about how people interact with products and love shaping experiences that feel natural and useful. For me, good design starts with listening and ends with something that makes sense to the user.
      </p>
    </div>

    {/* Creative Development */}
    <div className="rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
      <div className="bg-secondary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Gamepad2 className="h-8 w-8 text-secondary" />
      </div>
      <h3 className="text-xl font-serif font-medium mb-3">Creative Development</h3>
      <p className="text-muted-foreground leading-relaxed">
        I like the challenge of turning ideas into something you can see and use — whether it’s a website, an app, or a small game. I’m drawn to projects where creativity and technology meet.
      </p>
    </div>
  </div>
</div>

      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              About me
            </h2>
            <div className="w-16 h-[2px] bg-primary mx-auto"></div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 shadow-sm bg-white">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Som UX-designer och projektledare är jag driven av att skapa
              meningsfulla digitala upplevelser som verkligen gör skillnad för
              användare. Med en bakgrund inom både design och teknik, förstår
              jag vikten av att balansera estetik med funktionalitet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mitt fokus ligger på användarcentrerad design, agil
              projektledning och strategisk innovation. Jag tror på kraften i
              att kombinera kreativitet med datadriven beslutsfattning för att
              leverera lösningar som överträffar förväntningar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
