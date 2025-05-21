"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li><strong>Programming:</strong> C, C++, Python, JavaScript</li>
        <li><strong>Web Development:</strong> HTML, CSS, Next.js, MySQL</li>
        <li><strong>Other:</strong> Data Structures & Algorithms, Problem Solving</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <strong>B.Tech in Electronics and Communication Engineering</strong><br />
          National Institute of Technology Delhi (2022-2026)<br />
          CGPA: X.XX/10.00
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <strong>Summer Intern</strong> - Next24Tech (2024)<br />
          Worked on [brief description of your work]
        </li>
        <li>
          <strong>Technical Projects:</strong> AeroZenith (Drone Project), Bluetooth Steering Module
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a pre-final year ECE student at NIT Delhi with a passion for software development.
            I have strong problem-solving skills and expertise in multiple programming languages
            including C, C++, Python, and web technologies. I&apos;m actively seeking SDE internship
            opportunities to apply my technical knowledge and grow as a professional.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
