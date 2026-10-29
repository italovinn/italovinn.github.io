
import { Mail, Heart, ArrowUp } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

type FooterProps = {
    translations: any
}

function Footer({ translations }: FooterProps) {
    const footer = translations.footer
    const year = new Date().getFullYear()

    const links = [
        { id: "home", label: translations.navbar.home },
        { id: "about", label: translations.navbar.about },
        { id: "projects", label: translations.navbar.projects },
        { id: "contact", label: translations.navbar.contact },
    ]

    return (
        <footer className="
            relative z-10
            border-t border-white/10
            bg-zinc-950/70
            backdrop-blur-xl
        ">
            <div className="mx-auto max-w-7xl px-6 pt-12 pb-6">

                <div className="
                    grid grid-cols-1 gap-10
                    md:grid-cols-2
                ">
                    {/* Identidade e redes sociais */}
                    <div>
                        <a
                            href="#home"
                            className="inline-block text-2xl font-black tracking-tight text-white"
                        >
                            Ítalo{" "}
                            <span className="text-blue-400">
                                Vinhas.
                            </span>
                        </a>

                        <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-400">
                            {footer.description}
                        </p>

                        <div className="mt-6 flex items-center gap-4">
                            <a
                                href="https://github.com/italovinn"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="
                                    rounded-xl border border-white/10
                                    bg-white/5 p-3 text-zinc-400
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-blue-500/50
                                    hover:text-blue-400
                                "
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/italovinn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="
                                    rounded-xl border border-white/10
                                    bg-white/5 p-3 text-zinc-400
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-blue-500/50
                                    hover:text-blue-400
                                "
                            >
                                <FaLinkedin size={20} />
                            </a>

                            <a
                                href="mailto:italovinhas@icloud.com"
                                aria-label="E-mail"
                                className="
                                    rounded-xl border border-white/10
                                    bg-white/5 p-3 text-zinc-400
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-blue-500/50
                                    hover:text-blue-400
                                "
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navegação */}
                    <div className="md:justify-self-end">
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                            {footer.navigation}
                        </h3>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                            {links.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    className="
                                        text-sm text-zinc-400
                                        transition-colors duration-300
                                        hover:text-blue-400
                                    "
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Linha inferior */}
                <div className="
                    mt-12 flex flex-col items-center
                    justify-between gap-4
                    border-t border-white/10 pt-6
                    md:flex-row
                ">
                    <p className="text-center text-xs text-zinc-500">
                        © {year} Ítalo Vinhas. {footer.rights}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <span>{footer.madeWith}</span>
                        <Heart size={14} className="text-blue-400" />
                        <span>React & TypeScript</span>
                    </div>

                    <a
                        href="#home"
                        aria-label={footer.backToTop}
                        title={footer.backToTop}
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-xl border border-white/10
                            bg-white/5 text-blue-400
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-blue-500/50
                            hover:bg-blue-500/10
                        "
                    >
                        <ArrowUp size={19} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
