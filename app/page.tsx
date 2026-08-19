import profileData from "@/data/profile.json";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ArrowDown, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-4">
      {/* 5.1 Hero Section */}
      <Section id="hero" className="pt-12 sm:pt-20 pb-8 sm:pb-12">
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for new opportunities
          </div>

          {/* Headline & Tagline */}
          <div className="space-y-3">
            <h1 className="text-h1 text-neutral-900 dark:text-neutral-100 font-bold tracking-tight">
              Hi, I&apos;m {profileData.name}
            </h1>
            <p className="text-h3 font-medium text-indigo-600 dark:text-indigo-400">
              {profileData.title}
            </p>
          </div>

          {/* Short Intro */}
          <p className="text-body text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
            {profileData.tagline} {profileData.bio}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary" size="md">
              View my work
              <ArrowDown className="w-4 h-4 ml-1" />
            </Button>

            <Button
              href={profileData.resumeUrl}
              variant="outline"
              size="md"
              external
            >
              <FileText className="w-4 h-4 mr-1" />
              Download Resume
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
