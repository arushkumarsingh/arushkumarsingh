import profileData from "@/data/profile.json";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ArrowDown, FileText, Code2, Server, Wrench } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-4">
      {/* 5.1 Hero Section */}
      <Section id="hero" className="pt-12 pb-8 sm:pt-20 sm:pb-12">
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            Available for new opportunities
          </div>

          {/* Headline & Tagline */}
          <div className="space-y-3">
            <h1 className="text-h1 font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Hi, I&apos;m {profileData.name}
            </h1>
            <p className="text-h3 font-medium text-indigo-600 dark:text-indigo-400">
              {profileData.title}
            </p>
          </div>

          {/* Short Intro */}
          <p className="text-body max-w-2xl leading-relaxed text-neutral-600 dark:text-neutral-300">
            {profileData.tagline} {profileData.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button href="#projects" variant="primary" size="md">
              View my work
              <ArrowDown className="ml-1 h-4 w-4" />
            </Button>

            <Button
              href={profileData.resumeUrl}
              variant="outline"
              size="md"
              external
            >
              <FileText className="mr-1 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </Section>

      {/* 5.2 About Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="Background & technical skills overview"
      >
        <div className="space-y-8">
          <div className="prose dark:prose-invert text-body space-y-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
            <p>
              I build web applications with an emphasis on code quality, user
              experience, and minimalist design systems. With a strong
              background in full-stack JavaScript and TypeScript ecosystems, I
              bridge the gap between engineering execution and product design.
            </p>
            <p>
              Whether engineering scalable serverless backend architectures or
              crafting sleek responsive interfaces, I focus on delivering
              simple, robust software solutions.
            </p>
          </div>

          {/* Categorized Skills */}
          <div className="space-y-6 border-t border-neutral-200/60 pt-4 dark:border-neutral-800/60">
            <h3 className="text-h3 text-neutral-900 dark:text-neutral-100">
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Frontend */}
              <div className="space-y-3 rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800/80 dark:bg-neutral-900/50">
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  <Code2 className="h-4 w-4" />
                  Frontend
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills.Frontend.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-neutral-200/60 px-2.5 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800/80 dark:text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & DB */}
              <div className="space-y-3 rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800/80 dark:bg-neutral-900/50">
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  <Server className="h-4 w-4" />
                  Backend & DB
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills["Backend & DB"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-neutral-200/60 px-2.5 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800/80 dark:text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="space-y-3 rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-4 dark:border-neutral-800/80 dark:bg-neutral-900/50">
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  <Wrench className="h-4 w-4" />
                  DevOps & Tools
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.skills["DevOps & Tools"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-neutral-200/60 px-2.5 py-1 text-xs font-medium text-neutral-800 dark:bg-neutral-800/80 dark:text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
