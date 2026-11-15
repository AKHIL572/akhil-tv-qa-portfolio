import { ArrowDown, Github, Linkedin, Mail, Download, Code2, ShieldCheck, CheckCircle2, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profileImg from "@/assets/profile.jpg";
import resumePdf from "@/assets/Akhil_TV_QA_Resume.pdf";

const ROLES = [
    "QA Engineer",
    "Test Automation Engineer",
    "Software Developer",
    "STLC Specialist",
];

const useTypewriter = (words: string[], speed = 80, pause = 1800) => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex % words.length];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(current.slice(0, text.length + 1));
                if (text.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                setText(current.slice(0, text.length - 1));
                if (text.length - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((i) => i + 1);
                }
            }
        }, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, speed, pause]);

    return text;
};

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const [activeMode, setActiveMode] = useState<"qa" | "dev">("qa");
    const photoRef = useRef<HTMLDivElement>(null);
    const role = useTypewriter(ROLES);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">

            {/* Subtle dot grid */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: "radial-gradient(hsl(243 75% 65% / 0.12) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Ambient blobs */}
            <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* ── Left: Text content ── */}
                    <div className="max-w-2xl lg:max-w-xl">

                        {/* Badge */}
                        <div className="animate-fade-in mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-xs font-mono text-primary/80" style={{ animationDelay: "0s" }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Open to QA Engineer & Software Dev Roles
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 animate-fade-in tracking-tight" style={{ animationDelay: "0.1s" }}>
                            Hi, I'm{" "}
                            <span className="gradient-text">Akhil T V</span>
                        </h1>

                        {/* Typewriter role */}
                        <div className="flex items-center gap-2 mb-6 animate-fade-in h-9" style={{ animationDelay: "0.2s" }}>
                            <span className="text-xl md:text-2xl font-semibold text-foreground/90 font-mono">
                                {role}
                            </span>
                            <span className="w-0.5 h-7 bg-primary cursor-blink rounded-sm" />
                        </div>

                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
                            Delivering defect-free software through end-to-end STLC execution — manual & automation testing, API validation, Jira-driven defect management, and full-stack development expertise.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                            <a
                                href="#projects"
                                id="hero-view-projects"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
                            >
                                View Projects
                            </a>
                            <a
                                href={resumePdf}
                                download="Akhil_Resume.pdf"
                                id="hero-download-resume"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-secondary-foreground font-semibold text-sm hover:border-primary/40 hover:bg-secondary transition-all duration-200 hover:-translate-y-0.5"
                            >
                                <Download size={15} />
                                Resume
                            </a>

                            {/* Socials */}
                            <div className="flex gap-3 ml-1">
                                <a href="https://github.com/AKHIL572" target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/akhil-t-v" target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#contact"
                                    className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="flex flex-wrap gap-8 mt-12 animate-fade-in border-t border-border pt-8" style={{ animationDelay: "0.55s" }}>
                            {[
                                { value: "134+", label: "Test Cases Written" },
                                { value: "7+", label: "Defects Found & Fixed" },
                                { value: "3", label: "STLC & Dev Projects" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: DUAL-IDENTITY DEVELOPER & QA ENGINE CARD ── */}
                    <div
                        ref={photoRef}
                        className="relative animate-fade-in shrink-0"
                        style={{ animationDelay: "0.5s" }}
                    >
                        {/* Dynamic background glow based on active mode (Indigo & Violet) */}
                        <div
                            className={`absolute -inset-8 rounded-3xl blur-3xl transition-all duration-700 pointer-events-none ${
                                activeMode === "qa"
                                    ? "bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-transparent"
                                    : "bg-gradient-to-br from-primary/30 via-accent/20 to-transparent"
                            }`}
                        />

                        {/* ── VS Code / IDE Window ── */}
                        <div
                            className="relative will-change-transform w-[340px] sm:w-[380px] lg:w-[420px]"
                            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
                        >
                            {/* Window Top Bar with Mode Switcher */}
                            <div className="flex items-center justify-between px-4 py-2.5 bg-[hsl(240_8%_10%)] rounded-t-xl border border-border border-b-0">
                                {/* Traffic-light dots */}
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                                </div>

                                {/* Mode Switcher Tabs */}
                                <div className="flex items-center p-0.5 rounded-lg bg-[hsl(240_8%_6%)] border border-border/60">
                                    <button
                                        onClick={() => setActiveMode("qa")}
                                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-all duration-200 ${
                                            activeMode === "qa"
                                                ? "bg-primary/20 text-primary border border-primary/30 shadow-sm font-semibold"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        <ShieldCheck size={13} />
                                        QA Mode
                                    </button>
                                    <button
                                        onClick={() => setActiveMode("dev")}
                                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-all duration-200 ${
                                            activeMode === "dev"
                                                ? "bg-accent/20 text-accent border border-accent/30 shadow-sm font-semibold"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        <Code2 size={13} />
                                        Dev Mode
                                    </button>
                                </div>
                            </div>

                            {/* Active Tab Subheader */}
                            <div className="flex items-center justify-between px-4 py-1.5 bg-[hsl(240_8%_12%)] border-x border-border font-mono text-[10px] text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Terminal size={12} className={activeMode === "qa" ? "text-primary" : "text-accent"} />
                                    <span>
                                        {activeMode === "qa" ? "stlc_suite.spec.ts — PASS" : "app_controller.ts — OK"}
                                    </span>
                                </div>
                                <span className={activeMode === "qa" ? "text-primary font-semibold" : "text-accent font-semibold"}>
                                    {activeMode === "qa" ? "● 41/41 Passed" : "● HTTP 200 Ready"}
                                </span>
                            </div>

                            {/* Main photo container inside editor */}
                            <div className="relative border border-border border-t-0 rounded-b-xl overflow-hidden bg-[hsl(240_8%_8%)]">
                                {/* Code line gutter */}
                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-[hsl(240_8%_6%)] border-r border-border/40 flex flex-col items-center pt-2 gap-[3px] z-10">
                                    {Array.from({ length: 18 }).map((_, i) => (
                                        <span key={i} className="text-[9px] font-mono text-muted-foreground/30 leading-none">
                                            {i + 1}
                                        </span>
                                    ))}
                                </div>

                                {/* Profile photo */}
                                <div className="ml-8 relative">
                                    <img
                                        src={profileImg}
                                        alt="Akhil T V — QA Engineer & Software Developer"
                                        className="w-full h-auto object-cover object-top transition-all duration-500"
                                        style={{ maxHeight: "460px" }}
                                    />

                                    {/* Bottom terminal status bar overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(240_8%_7%)] via-[hsl(240_8%_7%/0.85)] to-transparent p-3 flex flex-col justify-end">
                                        <div className="font-mono text-[10px] space-y-1">
                                            {activeMode === "qa" ? (
                                                <>
                                                    <div className="flex items-center justify-between text-primary">
                                                        <span className="flex items-center gap-1.5">
                                                            <CheckCircle2 size={12} />
                                                            pytest -m "regression" --allure-dir
                                                        </span>
                                                        <span className="text-primary font-semibold">100% COVERAGE</span>
                                                    </div>
                                                    <div className="w-full bg-indigo-950/60 rounded-full h-1.5 overflow-hidden border border-primary/30">
                                                        <div className="bg-primary h-full w-full rounded-full animate-pulse" />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="flex items-center justify-between text-accent">
                                                        <span className="flex items-center gap-1.5">
                                                            <Code2 size={12} />
                                                            express.Router().post('/api/auth/login')
                                                        </span>
                                                        <span className="text-accent font-semibold">JWT AUTH OK</span>
                                                    </div>
                                                    <div className="w-full bg-purple-950/60 rounded-full h-1.5 overflow-hidden border border-accent/30">
                                                        <div className="bg-accent h-full w-full rounded-full animate-pulse" />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Dynamic Floating Badges in Indigo/Violet/Purple theme ── */}
                        {activeMode === "qa" ? (
                            <>
                                <div className="absolute -top-3 -right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-primary/40 shadow-lg text-xs font-mono text-primary animate-fade-in">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Selenium & Pytest
                                </div>
                                <div className="absolute top-1/3 -left-8 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-accent/40 shadow-lg text-xs font-mono text-accent animate-fade-in">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    Postman / Newman
                                </div>
                                <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-primary/40 shadow-lg text-xs font-mono text-primary animate-fade-in">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    Jira Agile QA
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="absolute -top-3 -right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-primary/40 shadow-lg text-xs font-mono text-primary animate-fade-in">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Node.js & Express
                                </div>
                                <div className="absolute top-1/3 -left-8 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-accent/40 shadow-lg text-xs font-mono text-accent animate-fade-in">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    Angular & Python
                                </div>
                                <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-primary/40 shadow-lg text-xs font-mono text-primary animate-fade-in">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    MongoDB & SQLite
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors animate-bounce">
                <ArrowDown size={18} />
            </a>
        </section>
    );
};

export default HeroSection;
