import Hero from '@/components/hero';
import Stats from '@/components/stats';
import ProjectsGrid from '@/components/projects-grid';
import Skills from '@/components/skills';
import CTASection from '@/components/cta-section';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProjectsGrid />
      <Skills />
      <CTASection />
    </>
  );
}
