import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CustomLink } from "@/components/CustomLink";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import {
  ArrowDown,
  FileText,
  Code2,
  Server,
  Wrench,
  Mail,
  Send,
} from "lucide-react";

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

      {/* 5.3 Projects Section */}
      <Section
        id="projects"
        title="Featured Work"
        subtitle="Selected open-source projects, design systems, and web applications"
      >
        <div className="grid grid-cols-1 gap-6">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              footer={
                <div className="flex items-center gap-4 text-xs font-medium">
                  {project.link && (
                    <CustomLink href={project.link} external showIcon>
                      Live Demo
                    </CustomLink>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      GitHub Repo
                    </a>
                  )}
                </div>
              }
            />
          ))}
        </div>
      </Section>

      {/* 5.4 Experience Section */}
      <Section
        id="experience"
        title="Work Experience"
        subtitle="Career journey and key achievements"
      >
        <div className="relative space-y-10 border-l-2 border-neutral-200 pl-6 dark:border-neutral-800">
          {experienceData.map((exp) => (
            <div key={exp.id} className="group relative">
              {/* Timeline Node */}
              <div className="absolute top-1.5 -left-[31px] h-4 w-4 rounded-full border-2 border-white bg-indigo-600 transition-transform group-hover:scale-125 dark:border-neutral-950 dark:bg-indigo-400" />

              <div className="space-y-2">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="text-h3 font-semibold text-neutral-900 dark:text-neutral-100">
                    {exp.role}{" "}
                    <span className="font-normal text-indigo-600 dark:text-indigo-400">
                      @ {exp.company}
                    </span>
                  </h3>
                  <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {exp.period}
                  </span>
                </div>

                <p className="text-body text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
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

      {/* 5.5 Contact Section */}
      <Section
        id="contact"
        title="Get in Touch"
        subtitle="Have a question or interested in working together? Drop me a message."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Details & Social Links */}
          <div className="space-y-6">
            <p className="text-body leading-relaxed text-neutral-600 dark:text-neutral-300">
              I&apos;m currently open to new software engineering opportunities,
              consulting projects, and tech collaborations. Feel free to reach
              out via email or connect on social platforms.
            </p>

            <div className="space-y-3">
              <a
                href={profileData.socials.email}
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                <Mail className="h-4 w-4" />
                {profileData.email}
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-neutral-200 bg-neutral-50 p-2.5 text-neutral-700 transition-colors hover:border-neutral-300 hover:text-indigo-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:text-indigo-400"
              >
                <GithubIcon className="h-5 w-5" />
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-neutral-200 bg-neutral-50 p-2.5 text-neutral-700 transition-colors hover:border-neutral-300 hover:text-indigo-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:text-indigo-400"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>

              <a
                href={profileData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rounded-lg border border-neutral-200 bg-neutral-50 p-2.5 text-neutral-700 transition-colors hover:border-neutral-300 hover:text-indigo-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:text-indigo-400"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Simple Contact Form */}
          <form
            action="https://formspree.io/f/xvgnvqwl"
            method="POST"
            className="space-y-4 rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-5 dark:border-neutral-800/80 dark:bg-neutral-900/50"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-medium text-neutral-700 dark:text-neutral-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium text-neutral-700 dark:text-neutral-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs font-medium text-neutral-700 dark:text-neutral-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Write your message here..."
                className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
            >
              Send Message
              <Send className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </form>
        </div>
      </Section>
    </div>
  );
}
