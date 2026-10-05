import Image from "next/image";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { ArrowDown, Code2, Server, Wrench, Cpu, BarChart3, Sparkles, Mail, Send, Flame } from "lucide-react";

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
              <p className="text-base font-medium text-indigo-600 dark:text-cyan-400">{profileData.tagline}</p>
            </div>

            <p className="text-body text-neutral-700 dark:text-neutral-300 leading-relaxed">{profileData.intro}</p>

            <p className="text-body text-neutral-700 dark:text-neutral-300 leading-relaxed">{profileData.bio}</p>

            {/* Quote Banner */}
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-start gap-3">
              <Flame className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="italic font-semibold">&ldquo;{profileData.motto}&rdquo;</p>
                <p className="italic">&ldquo;{profileData.quote}&rdquo;</p>
              </div>
            </div>

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

              <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-0.5 font-mono">
                <p className="font-semibold text-neutral-900 dark:text-neutral-200">IIT Kanpur Graduate</p>
                <p>Aerospace & AI Infra</p>
                <p className="text-[11px] text-neutral-500">{profileData.email}</p>
              </div>

              {/* Social Icon Bar under photo */}
              <div className="flex items-center justify-center gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.email}
                  aria-label="Email"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
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
                className="p-3 rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/50 flex items-start gap-2.5"
              >
                <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400 shrink-0">0{idx + 1}.</span>
                <p className="text-neutral-800 dark:text-neutral-200 leading-snug">{item}</p>
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
                className="p-3.5 rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/50 space-y-2.5"
              >
                <div className="flex items-center gap-2 font-semibold text-xs text-neutral-900 dark:text-neutral-100">
                  {getCategoryIcon(category)}
                  {category}
                </div>
                <div className="flex flex-wrap gap-1">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
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
        <div className="relative pl-5 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Node */}
              <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-neutral-950 bg-indigo-600 dark:bg-cyan-400 transition-transform group-hover:scale-125" />

              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-h3 text-neutral-900 dark:text-neutral-100 font-semibold">
                    {exp.role} <span className="text-indigo-600 dark:text-cyan-400 font-normal">@ {exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
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

      {/* 4. Contact Section */}
      <Section id="contact" title="contact" subtitle="Feel free to reach out for technical discussions, AI infrastructure, or aerospace research.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I am open to discussions around AI infrastructure, real-time telemetry, aerospace systems, and physical computing. Drop me an email or
              message.
            </p>

            <div>
              <a
                href={profileData.socials.email}
                className="inline-flex items-center gap-2 text-sm font-mono text-indigo-600 dark:text-cyan-400 hover:underline"
              >
                <Mail className="w-4 h-4" />
                {profileData.email}
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xvgnvqwl"
            method="POST"
            className="space-y-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-3 py-1.5 text-sm rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-3 py-1.5 text-sm rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                placeholder="Write your message here..."
                className="w-full px-3 py-1.5 text-sm rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
              ></textarea>
            </div>

            <Button type="submit" variant="primary" size="sm" className="w-full">
              Send Message
              <Send className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </form>
        </div>
      </Section>
    </div>
  );
}
