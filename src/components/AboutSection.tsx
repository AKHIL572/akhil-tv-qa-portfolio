import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutPhoto from "@/assets/about-photo.png";

const AboutSection = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="about" className="py-28 border-t border-border">
            <div
                ref={ref}
                className={`container mx-auto px-6 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <p className="section-label mb-3">// About</p>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <img
                        src={aboutPhoto}
                        alt="Profile photo"
                        className="w-64 h-80 object-cover rounded-2xl shrink-0"
                    />
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                            Ensuring software quality from requirements to release.
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Focused on delivering defect-free, reliable software through end-to-end Software Testing Life Cycle (STLC) execution — spanning requirement analysis, test planning, test case design, manual & automation testing, and defect management. Experienced with Selenium, pytest-bdd, Postman/Newman, Jira, and GitHub Actions CI/CD pipelines.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Hands-on project experience includes building full-stack systems and independently owning the complete QA process — from writing test strategies and RTMs to running regression suites and producing test closure reports.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
