import profileData from "@/data/profile.json";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ArrowDown, FileText } from "lucide-react";

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
    </div>
  );
}
