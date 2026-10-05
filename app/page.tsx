"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import creativityData from "@/data/creativity.json";
import booksData from "@/data/books.json";
import blogsData from "@/data/blogs.json";
import experienceData from "@/data/experience.json";
import { Card } from "@/components/Card";
import { Mail, ExternalLink } from "lucide-react";

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
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "creativity", label: "creativity" },
  { id: "blog", label: "blog" },
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
      history.pushState(null, "", `#${id}`);
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
                  className={`px-4 py-2 rounded-md text-sm font-mono font-medium transition-all cursor-pointer select-none border ${isOpen
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
                  My Core
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


            </div>
          )}

          {/* 2. EXPERIENCE */}
          {activeSection === "experience" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 pt-1">
                {experienceData.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 shadow-2xs space-y-2.5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        {exp.role}{" "}
                        <span className="text-indigo-700 dark:text-cyan-400 font-medium">
                          @ {exp.company}
                        </span>
                      </h3>
                      {"period" in exp && (exp as { period?: string }).period && (
                        <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                          {(exp as { period?: string }).period}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    {"highlights" in exp && (exp as { highlights?: string[] }).highlights && (exp as { highlights?: string[] }).highlights!.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 dark:text-neutral-300 pt-1 leading-relaxed">
                        {(exp as { highlights?: string[] }).highlights!.map((bullet, idx) => (
                          <li key={idx} className="pl-1">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/60 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. PROJECTS */}
          {activeSection === "projects" && (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal">
                Aerospace and aerodynamics research.
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

          {/* 3. CREATIVITY */}
          {activeSection === "creativity" && (
            <div className="space-y-5">
              {/* Highlighted Professor Meme Story */}
              <div className="p-4 sm:p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 shadow-2xs">
                <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
                  I can create 100s of memes in 1 hr. Once a professor gave the option to submit an assignment or submit memes. I opened the email at 2 AM, created 20 memes in half an hour, and sent them to the professor. Got{" "}
                  <a
                    href="https://lnkd.in/p/ejCVqRx2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-700 dark:text-cyan-400 font-medium underline underline-offset-2 hover:opacity-80 transition-opacity inline-flex items-center gap-1"
                  >
                    featured in the professor&apos;s LinkedIn post ↗
                  </a>
                  .
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 pt-1">
                {creativityData.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 shadow-2xs space-y-3 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60 font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.links && item.links.length > 0 && (
                      <div className="pt-2 flex flex-wrap items-center gap-3.5 border-t border-neutral-100 dark:border-neutral-800/80 text-xs font-mono">
                        {item.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-700 dark:text-cyan-400 hover:underline inline-flex items-center gap-1 font-medium"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. BLOG: Upcoming blogs */}
          {activeSection === "blog" && (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal">
                Upcoming essays and personal notes.
              </p>
              <div className="grid grid-cols-1 gap-3.5 pt-1">
                {blogsData.map((post) => (
                  <article
                    key={post.id}
                    className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 shadow-2xs space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        {post.title}
                      </h3>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700/60 w-fit">
                        upcoming
                      </span>
                    </div>

                    {post.summary && (
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                        {post.summary}
                      </p>
                    )}
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
                  Connect to me if you are building something cool                </p>
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
