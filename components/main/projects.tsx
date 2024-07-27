"use client";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import Carousel from "@/components/sub/Carousel";
export const Projects = () => {
  const style = {
    width: 297,
    height: 296,
  };
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-10">
        <Carousel
          height={550}
          width={1450}
          yOrigin={45}
          yRadius={100}
          autoPlay={true}
        >
          {PROJECTS.map((project, index) => (
            <div key={index + 1} style={style}>
              <ProjectCard
                key={project.title}
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
