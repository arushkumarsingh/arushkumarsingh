import Image from "next/image";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import booksData from "@/data/books.json";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { ArrowDown, Code2, Server, Wrench, Cpu, BarChart3, Sparkles, Mail, BookOpen, ExternalLink } from "lucide-react";

function renderFormattedText(text?: string): React.ReactNode {
  if (!text) return null;
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];
    parts.push(
      <a
        key={match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-700 dark:text-cyan-400 font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        {label}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export default function Home() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />;
      case "Backend":
        return <Server className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />;
      case "Frontend":
        return <Code2 className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />;
      case "Infrastructure":
        return <Wrench className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />;
      case "Data / Observability":
        return <BarChart3 className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />;
      case "AI":
        return <Sparkles className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />;
      default:
        return <Cpu className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* 1. Hero / Profile Section */}
      <Section id="about" className="pt-10 sm:pt-14 pb-8">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8">
          {/* Left Bio Column */}
          <div className="space-y-5 flex-1">
            <div className="space-y-2">
              <h1 className="text-h1 text-neutral-900 dark:text-neutral-100 tracking-tight">{profileData.name}</h1>
              {(profileData as { tagline?: string }).tagline && (
                <p className="text-base font-medium text-indigo-700 dark:text-cyan-400">
                  {(profileData as { tagline?: string }).tagline}
                </p>
              )}
            </div>

            <p className="text-body text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
              {renderFormattedText(profileData.intro)}
            </p>

            <p className="text-body text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
              {renderFormattedText(profileData.bio)}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button href="#projects" variant="primary" size="sm">
                Explore Projects
                <ArrowDown className="w-3.5 h-3.5 ml-1" />
              </Button>
              <Button href="#contact" variant="outline" size="sm">
                <Mail className="w-3.5 h-3.5 mr-1" />
                Contact
              </Button>
            </div>
          </div>

          {/* Right Column: Signature al-folio Floating Profile Card */}
          <div className="w-full md:w-64 shrink-0 space-y-3">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 z-depth-1 space-y-3 text-center">
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center relative">
                {profileData.avatar ? (
                  <Image src={profileData.avatar} alt={profileData.name} width={240} height={240} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold text-neutral-400">AKS</span>
                )}
              </div>



              {/* Social Icon Bar under photo */}
              <div className="flex items-center justify-center gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.email}
                  aria-label="Email"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Core Tenets */}
        <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
          <h3 className="text-h3 text-neutral-900 dark:text-neutral-100 lowercase">core tenets</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {profileData.taglines.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/50 flex items-start gap-2.5"
              >
                <span className="font-mono text-xs font-bold text-indigo-700 dark:text-cyan-400 shrink-0">0{idx + 1}.</span>
                <p className="text-neutral-900 dark:text-neutral-100 font-medium leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
          <h3 className="text-h3 text-neutral-900 dark:text-neutral-100 lowercase">skills & technologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(profileData.skills).map(([category, items]) => (
              <div
                key={category}
                className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/50 space-y-2.5"
              >
                <div className="flex items-center gap-2 font-semibold text-xs text-neutral-900 dark:text-neutral-100">
                  {getCategoryIcon(category)}
                  {category}
                </div>
                <div className="flex flex-wrap gap-1">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 2. Projects Section */}
      <Section id="projects" title="projects & research" subtitle="Selected hardware telemetry, AI products, and aerospace research">
        <div className="grid grid-cols-1 gap-4">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </Section>

      {/* 3. Experience Timeline */}
      <Section id="experience" title="timeline & journey" subtitle="Career trajectory across aerospace, AI, and engineering">
        <div className="relative pl-5 border-l-2 border-neutral-300 dark:border-neutral-800 space-y-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Node */}
              <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-neutral-950 bg-indigo-700 dark:bg-cyan-400 transition-transform group-hover:scale-125" />

              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-h3 text-neutral-900 dark:text-neutral-100 font-semibold">
                    {exp.role} <span className="text-indigo-700 dark:text-cyan-400 font-medium">@ {exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-neutral-700 dark:text-neutral-300 bg-neutral-200/80 dark:bg-neutral-900 px-2 py-0.5 rounded font-medium">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">{exp.description}</p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 border border-neutral-300/60 dark:border-neutral-700/60 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Books Section */}
      <Section id="books" title="books & reading" subtitle="Books that shaped my thinking on technology, systems, and human cognition">
        <div className="grid grid-cols-1 gap-4">
          {booksData.map((book) => (
            <div
              key={book.id}
              className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 shadow-sm hover:shadow-md transition-all space-y-2.5 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-700 dark:text-cyan-400 shrink-0" />
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-700 dark:group-hover:text-cyan-400 transition-colors">
                    {book.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-neutral-700 dark:text-neutral-400 font-medium">
                  by {book.author}
                </span>
              </div>

              <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">
                {book.description}
              </p>

              <div className="pt-1">
                <a
                  href={book.goodreadsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-indigo-700 dark:text-cyan-400 hover:underline"
                >
                  [Goodreads]
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Contact Section */}
      <Section id="contact" title="contact" subtitle="Feel free to reach out for technical discussions, AI infrastructure, or aerospace research.">
        <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/50 space-y-4">
          <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">
            I am open to discussions around AI infrastructure, real-time telemetry, aerospace systems, and physical computing.
          </p>

          <div>
            <a
              href={profileData.socials.email}
              className="inline-flex items-center gap-2.5 text-base font-mono font-medium text-indigo-700 dark:text-cyan-400 hover:underline"
            >
              <Mail className="w-5 h-5" />
              {profileData.email}
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
