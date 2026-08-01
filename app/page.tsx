import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Hobbies } from "@/components/sections/Hobbies";
import { Interests } from "@/components/sections/Interests";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { GameProjects } from "@/components/sections/GameProjects";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Certificates } from "@/components/sections/Certificates";
import { DreamUniversity } from "@/components/sections/DreamUniversity";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Hobbies />
      <Interests />
      <Skills />
      <Projects />
      <GameProjects />
      <GitHubActivity />
      <Education />
      <Achievements />
      <Certificates />
      <DreamUniversity />
      <Contact />
    </>
  );
}
