"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import booksData from "@/data/books.json";
import blogsData from "@/data/blogs.json";
import { Card } from "@/components/Card";
import {
  Code2,
  Server,
  Wrench,
  Cpu,
  BarChart3,
  Sparkles,
  Mail,
  ExternalLink,
} from "lucide-react";

// Markdown link parser for intro & paragraphs
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

const SECTION_BUTTONS = [
  { id: "overview", label: "overview" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "writing", label: "writing" },
  { id: "books", label: "books" },
  { id: "contact", label: "contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionContentRef = useRef<HTMLDivElement>(null);

  // Sync with URL hash and custom open-section events
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (SECTION_BUTTONS.some((b) => b.id === hash)) {
        setActiveSection(hash);
      } else if (!hash) {
        setActiveSection(null);
      }
    };

    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent<string | null>;
      const targetId = customEvent.detail;
      setActiveSection(targetId ?? null);
      if (targetId && sectionContentRef.current) {
        setTimeout(() => {
          sectionContentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    window.addEventListener("open-section", handleCustomOpen as EventListener);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("open-section", handleCustomOpen as EventListener);
    };
  }, []);

  const toggleSection = (id: string) => {
    if (activeSection === id) {
      // Collapse
      setActiveSection(null);
      history.pushState(null, "", window.location.pathname);
      window.dispatchEvent(new CustomEvent("open-section", { detail: null }));
    } else {
      // Expand
      setActiveSection(id);
      window.location.hash = id;
      window.dispatchEvent(new CustomEvent("open-section", { detail: id }));
      setTimeout(() => {
        sectionContentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const closeActiveSection = () => {
    setActiveSection(null);
    history.pushState(null, "", window.location.pathname);
    window.dispatchEvent(new CustomEvent("open-section", { detail: null }));
  };

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

  // Get paragraphs from profileData: fallback to bio if paragraphs is not defined
  const paragraphs = (profileData as { paragraphs?: string[] }).paragraphs || [profileData.bio];

  return (
    <div className="layout-container py-12 sm:py-16 space-y-10">
      {/* Front Page Hero: Name, Intro, Custom Paragraphs & Clean Rectangular Buttons */}
      <section className="space-y-7">
        {/* Header: Name & Profile Avatar */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {profileData.name}
            </h1>
            <p className="text-sm sm:text-base font-mono font-medium text-indigo-700 dark:text-cyan-400">
              Aerospace Engineering · IIT Kanpur
            </p>
          </div>

          {/* Profile photo */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm shrink-0">
            {profileData.avatar ? (
              <Image
                src={profileData.avatar}
                alt={profileData.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xl font-bold text-neutral-400">
                AKS
              </div>
            )}
          </div>
        </div>

        {/* Short Intro */}
        <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
          {renderFormattedText(profileData.intro)}
        </p>

        {/* Custom Paragraphs */}
        <div className="space-y-3">
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal"
            >
              {renderFormattedText(para)}
            </p>
          ))}
        </div>

        {/* Minimal Social Links */}
        <div className="flex flex-wrap items-center gap-3 pt-1 text-sm font-mono">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-900 dark:hover:decoration-white transition-colors"
          >
            github
          </a>
          <span className="text-neutral-300 dark:text-neutral-700">/</span>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-900 dark:hover:decoration-white transition-colors"
          >
            linkedin
          </a>
          <span className="text-neutral-300 dark:text-neutral-700">/</span>
          <a
            href={profileData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-900 dark:hover:decoration-white transition-colors"
          >
            twitter
          </a>
          <span className="text-neutral-300 dark:text-neutral-700">/</span>
          <a
            href={profileData.socials.email}
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-900 dark:hover:decoration-white transition-colors"
          >
            email
          </a>
        </div>

        {/* Clean, Minimal Rectangular Navigation Buttons */}
        <div className="pt-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {SECTION_BUTTONS.map((btn) => {
              const isOpen = activeSection === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => toggleSection(btn.id)}
                  aria-expanded={isOpen}
                  className={`px-4 py-2 rounded-md text-sm font-mono font-medium transition-all cursor-pointer select-none border ${
                    isOpen
                      ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border-neutral-900 dark:border-neutral-100 shadow-xs"
                      : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Content Pane: Only renders when a section is opened */}
      {activeSection && (
        <div
          ref={sectionContentRef}
          id="active-section-container"
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/30 p-5 sm:p-7 shadow-xs space-y-6 transition-all animate-in fade-in duration-150"
        >
          {/* Header of Opened Section */}
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
            <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 capitalize font-mono">
              {activeSection}
            </h2>
            <button
              onClick={closeActiveSection}
              aria-label="Close section"
              className="px-3 py-1 rounded text-xs font-mono font-medium border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              close
            </button>
          </div>

          {/* 1. OVERVIEW: Core Tenets & Skills */}
          {activeSection === "overview" && (
            <div className="space-y-8">
              {/* Core Tenets */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 font-mono lowercase">
                  core tenets
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {profileData.taglines.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 flex items-start gap-2.5 shadow-2xs"
                    >
                      <span className="font-mono text-xs font-bold text-indigo-700 dark:text-cyan-400 shrink-0">
                        0{idx + 1}.
                      </span>
                      <p className="text-neutral-900 dark:text-neutral-100 font-medium leading-snug">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills & Technologies */}
              <div className="space-y-3 pt-3 border-t border-neutral-200/80 dark:border-neutral-800/80">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 font-mono lowercase">
                  skills & technologies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(profileData.skills).map(([category, items]) => (
                    <div
                      key={category}
                      className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 space-y-2.5 shadow-2xs"
                    >
                      <div className="flex items-center gap-2 font-semibold text-xs text-neutral-900 dark:text-neutral-100">
                        {getCategoryIcon(category)}
                        {category}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium border border-neutral-200/60 dark:border-neutral-700/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. PROJECTS */}
          {activeSection === "projects" && (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal">
                Selected hardware telemetry, AI products, and aerospace research.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-1">
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
            </div>
          )}

          {/* 3. EXPERIENCE */}
          {activeSection === "experience" && (
            <div className="space-y-6">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal">
                Career trajectory across aerospace, AI, and systems engineering.
              </p>
              <div className="relative pl-5 border-l-2 border-neutral-300 dark:border-neutral-800 space-y-7 pt-1">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="relative group">
                    <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-neutral-950 bg-indigo-700 dark:bg-cyan-400 transition-transform group-hover:scale-125" />
                    <div className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                          {exp.role}{" "}
                          <span className="text-indigo-700 dark:text-cyan-400 font-medium">
                            @ {exp.company}
                          </span>
                        </h3>
                        <span className="text-xs font-mono text-neutral-700 dark:text-neutral-300 bg-neutral-200/80 dark:bg-neutral-800 px-2 py-0.5 rounded font-medium">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">
                        {exp.description}
                      </p>

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
            </div>
          )}

          {/* 4. WRITING */}
          {activeSection === "writing" && (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal">
                Essays, engineering notes, and observations on telemetry, AI, and systems.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-1">
                {blogsData.map((post) => (
                  <article
                    key={post.id}
                    className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 shadow-2xs hover:shadow-sm transition-all space-y-2.5 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-700 dark:group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 shrink-0">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">
                      {post.summary}
                    </p>

                    <div className="pt-1 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/60 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={post.slug}
                        className="text-xs font-mono font-medium text-indigo-700 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                      >
                        read note ↗
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* 5. BOOKS */}
          {activeSection === "books" && (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal">
                Books that have shaped my thinking on technology, systems, and human cognition.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-1">
                {booksData.map((book) => (
                  <div
                    key={book.id}
                    className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 shadow-2xs hover:shadow-sm transition-all space-y-2.5 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-700 dark:group-hover:text-cyan-400 transition-colors">
                        {book.title}
                      </h3>
                      <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 font-medium">
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
                        className="inline-flex items-center gap-1 text-xs font-mono font-medium text-indigo-700 dark:text-cyan-400 hover:underline"
                      >
                        Goodreads
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. CONTACT */}
          {activeSection === "contact" && (
            <div className="space-y-4">
              <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 space-y-4 shadow-2xs">
                <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">
                  I am always open to discussions around AI infrastructure, real-time telemetry, aerospace systems, and physical computing.
                </p>
                <div>
                  <a
                    href={profileData.socials.email}
                    className="inline-flex items-center gap-2 text-base font-mono font-medium text-indigo-700 dark:text-cyan-400 hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    {profileData.email}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Bottom collapse action */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={closeActiveSection}
              className="text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer transition-colors"
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
