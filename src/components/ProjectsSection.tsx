import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import projectStudentEnrollment from "@/assets/project-student-enrollment.png";
import projectSmartAIAssistant from "@/assets/project-smart-ai-assistant.png";
import projectClinicQA from "@/assets/project-clinic-qa.png";

type Project = {
    title: string;
    description: string;
    tags: string[];
    github: string;
    live?: string;
    image: string;
    inProgress?: boolean;
};

// ─── QA PROJECTS ─────────────────────────────────────────────────────────────
const qaProjects: Project[] = [
    {
        title: "Student Enrollment and Learning Management System",
        description: "Enterprise-grade full-stack learning management system built with Node.js, Express, MongoDB, and Angular, featuring JWT-based role-based access control, course enrollment, payment simulation, progress tracking, and multi-role dashboards. Independently executed a complete STLC with 93 test cases, 40 requirements, automated Postman/Newman regression testing, and identified, fixed, and regression-verified 4 production defects, delivering a fully tested and documented software solution.",
        tags: [
            "Node.js",
            "Express.js",
            "Angular",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Postman",
            "Newman",
            "QA Testing",
            "REST API"
        ],
        github: "https://github.com/AKHIL572/student-enrollment-system",
        image: projectStudentEnrollment,
    },
    {
        title: "Clinic Appointment Booking System – End-to-End QA Automation Project",
        description: "Comprehensive Software Testing Life Cycle (STLC) project on a custom-built Flask clinic management application with Patient, Doctor, and Admin roles. Executed 41 manual and API test cases, managed Agile QA workflows in Jira (5 Epics, 15 Tasks, 3 Defects), identified and closed 3 genuine defects, and produced complete QA documentation including Test Strategy, RTM, and Test Closure Report. Also built a reusable UI/API automation framework using Selenium, pytest-bdd, Postman/Newman, Allure, and GitHub Actions.",
        tags: [
            "Manual Testing",
            "API Testing",
            "Jira",
            "Postman",
            "Selenium",
            "Pytest-BDD",
            "Flask",
            "SQLite",
            "GitHub Actions",
            "Allure"
        ],
        github: "https://github.com/AKHIL572/clinic-appointment-booking-qa",
        image: projectClinicQA,
    },
];

// ─── DEVELOPMENT PROJECTS ─────────────────────────────────────────────────────
const devProjects: Project[] = [
    {
        title: "Smart AI Assistant",
        description: "Multi-feature AI-powered Streamlit application built with Google's Gemini 2.5 Flash Lite API, combining conversational AI, food nutrition analysis, YouTube video summarization, and PDF document chat in a single platform. Supports multimodal AI, context-aware conversations, document-grounded Q&A with Google Search fallback, and generates downloadable nutrition reports in PDF, Excel, and CSV formats with robust error handling and optimized large-context processing.",
        tags: [
            "Python",
            "Streamlit",
            "Google Gemini API",
            "Generative AI",
            "PyPDF2",
            "Pillow",
            "Pandas",
            "OpenPyXL",
            "FPDF",
            "YouTube Transcript API"
        ],
        github: "https://github.com/AKHIL572/Smart-AI-Assistant",
        image: projectSmartAIAssistant,
    },
];

const INITIAL_COUNT = 4;

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => (
    <div
        className={`bg-card border border-border rounded-xl overflow-hidden card-hover group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
    >
        {project.image && (
            <div className="relative overflow-hidden h-48">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                {project.inProgress && (
                    <span className="absolute top-3 right-3 text-xs font-mono font-medium px-2.5 py-1 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-300">
                        In Progress
                    </span>
                )}
            </div>
        )}
        <div className="p-8">
            <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col gap-2 pr-4">
                    <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
                    {!project.image && project.inProgress && (
                        <div className="flex">
                            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-300">
                                In Progress
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex gap-3 shrink-0">
                    {project.github && project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github size={16} />
                        </a>
                    )}
                    {project.live && project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

// ─── SUBSECTION COMPONENT ─────────────────────────────────────────────────────
const ProjectSubsection = ({
    label,
    title,
    projects,
    isVisible,
}: {
    label: string;
    title: string;
    projects: Project[];
    isVisible: boolean;
}) => {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

    return (
        <div className="mb-20">
            {/* Subsection header */}
            <div className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <p className="font-mono text-primary/70 text-xs tracking-widest uppercase mb-2">{label}</p>
                <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
            </div>

            <div className="relative">
                <div className="grid md:grid-cols-2 gap-6">
                    {visibleProjects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} isVisible={isVisible} />
                    ))}
                </div>

                {/* Gradient fade overlay when collapsed */}
                {!showAll && projects.length > INITIAL_COUNT && (
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
                )}
            </div>

            {/* Show More / Show Less — only if more than INITIAL_COUNT */}
            {projects.length > INITIAL_COUNT && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors border border-primary/30 hover:border-primary/60 px-6 py-3 rounded-lg"
                    >
                        {showAll ? (
                            <>Show Less <ChevronUp size={16} /></>
                        ) : (
                            <>Show More <ChevronDown size={16} /></>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────
const ProjectsSection = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="projects" className="py-28 border-t border-border">
            <div ref={ref} className="container mx-auto px-6">
                {/* Section header */}
                <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="section-label mb-3">// Projects</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-14 tracking-tight">Selected Work</h2>
                </div>

                {/* QA Projects — first */}
                <ProjectSubsection
                    label="// Quality Assurance & Testing"
                    title="QA Engineering Projects"
                    projects={qaProjects}
                    isVisible={isVisible}
                />

                {/* Divider */}
                <div className={`border-t border-border mb-20 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`} />

                {/* Development Projects — second */}
                <ProjectSubsection
                    label="// Software Development"
                    title="Development Projects"
                    projects={devProjects}
                    isVisible={isVisible}
                />
            </div>
        </section>
    );
};

export default ProjectsSection;