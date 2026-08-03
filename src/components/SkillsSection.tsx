import {
    ShieldCheck,
    FlaskConical,
    Bot,
    FileText,
    Bug,
    Server,
    Database,
    GitBranch,
    Wrench,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
    {
        icon: <ShieldCheck size={20} />,
        category: "Core QA & Testing",
        items: [
            "Software Testing",
            "Quality Assurance (QA)",
            "STLC",
            "SDLC",
            "Agile Testing",
            "Scrum",
            "Manual Testing",
            "Functional Testing",
            "Exploratory Testing",
            "Black Box Testing",
            "Regression Testing",
            "Smoke Testing",
            "Sanity Testing",
            "Integration Testing",
            "API Testing",
            "End-to-End Testing",
            "UAT",
            "BVA",
            "Equivalence Partitioning",
        ],
    },
    {
        icon: <FileText size={20} />,
        category: "Test Design & Management",
        items: [
            "Requirement Analysis",
            "Test Planning",
            "Test Case Design",
            "Test Execution",
            "RTM",
            "Defect Management",
            "Bug Reporting",
            "Root Cause Analysis",
            "Risk-Based Testing",
            "Test Summary Reporting",
            "Test Closure Reporting",
            "Regression Suite Design",
            "QA Metrics Dashboard",
        ],
    },
    {
        icon: <FileText size={20} />,
        category: "QA Documentation",
        items: [
            "Test Plan",
            "Test Strategy",
            "Test Cases",
            "Test Scenarios",
            "RTM",
            "Defect Log",
            "Test Summary Report",
            "Test Closure Report",
            "Risk Matrix",
        ],
    },
    {
        icon: <Bot size={20} />,
        category: "Automation Testing",
        items: [
            "Test Automation",
            "Selenium WebDriver",
            "Pytest",
            "pytest-bdd",
            "Page Object Model (POM)",
            "Gherkin",
            "BDD",
            "Newman",
            "Postman Collections",
            "Automated API Testing",
        ],
    },
    {
        icon: <FlaskConical size={20} />,
        category: "API Testing",
        items: [
            "REST API Testing",
            "Postman",
            "Newman",
            "HTTP Methods",
            "JSON",
            "API Validation",
            "Status Code Validation",
        ],
    },
    {
        icon: <Bug size={20} />,
        category: "Bug Tracking & Project Management",
        items: [
            "Jira",
            "Agile",
            "Scrum",
            "Sprint Planning",
            "Epic Management",
            "Task Management",
            "Bug Lifecycle",
            "Defect Lifecycle",
        ],
    },
    {
        icon: <Server size={20} />,
        category: "Backend & Development Knowledge",
        items: [
            "Node.js",
            "Express.js",
            "Flask",
            "Python",
            "JavaScript",
            "Angular",
            "REST APIs",
            "JWT Authentication",
            "Role-Based Access Control (RBAC)",
        ],
    },
    {
        icon: <Database size={20} />,
        category: "Databases & Validation",
        items: [
            "MongoDB",
            "Mongoose",
            "SQLite",
            "SQL",
            "Database Validation",
            "Data Verification",
            "MongoDB Compass",
        ],
    },
    {
        icon: <GitBranch size={20} />,
        category: "Version Control & DevOps",
        items: [
            "Git",
            "GitHub",
            "GitHub Actions",
            "CI/CD",
            "Allure Reports",
        ],
    },
    {
        icon: <Wrench size={20} />,
        category: "Tools",
        items: [
            "Postman",
            "Newman",
            "Jira",
            "MongoDB Compass",
            "VS Code",
            "Excel",
            "Microsoft Word",
        ],
    },
];

const SkillsSection = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="skills" className="py-28 border-t border-border">
            <div ref={ref} className="container mx-auto px-6">
                <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="section-label mb-3">// Skills</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-14 tracking-tight">QA & Tech Stack</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, i) => (
                        <div
                            key={group.category}
                            className={`bg-card border border-border rounded-xl p-6 card-hover group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-primary">{group.icon}</span>
                                <h3 className="font-semibold text-foreground">{group.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span key={skill} className="tag-pill">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;