
import { useEffect, useState } from "react"
import { ButtonLanguage } from "../ui/Button"

type NavBarProps = {
    translations: any
    language: string
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}

const SECTION_IDS = ["home", "about", "projects", "contact"]

function NavBar({
    translations,
    language,
    setLanguage,
}: NavBarProps) {
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        let animationFrame = 0

        const updateActiveSection = () => {
            const sections = SECTION_IDS
                .map((id) => document.getElementById(id))
                .filter((section): section is HTMLElement => section !== null)

            if (sections.length === 0) return

            // Ponto de referência: 35% da altura da tela.
            const referencePoint = window.innerHeight * 0.35

            // Detecta quando o usuário chegou ao final da página.
            const reachedBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 5

            if (reachedBottom) {
                setActiveSection(sections[sections.length - 1].id)
                return
            }

            // Seleciona a última seção cujo início já passou
            // pelo ponto de referência.
            let currentSection = sections[0].id

            for (const section of sections) {
                if (section.getBoundingClientRect().top <= referencePoint) {
                    currentSection = section.id
                }
            }

            setActiveSection(currentSection)
        }

        const handleScroll = () => {
            if (animationFrame) return

            animationFrame = window.requestAnimationFrame(() => {
                updateActiveSection()
                animationFrame = 0
            })
        }

        updateActiveSection()

        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("resize", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
            window.cancelAnimationFrame(animationFrame)
        }
    }, [])

    const links = [
        { id: "home", label: translations.navbar.home },
        { id: "about", label: translations.navbar.about },
        { id: "projects", label: translations.navbar.projects },
        { id: "contact", label: translations.navbar.contact },
    ]

    return (
        <header
            className="
                fixed top-0 z-50 w-full
                border-b border-white/10
                bg-black/30 backdrop-blur-xl
                shadow-lg shadow-black/20
            "
        >
            <nav
                className="
                    mx-auto flex max-w-7xl
                    items-center justify-between
                    px-6 py-5
                "
            >
                <a
                    href="#home"
                    className="inline-block text-2xl font-black tracking-tight text-white"
                >
                    Ítalo
                    <span className="text-blue-400">
                        Vinhas.
                    </span>
                </a>

                <div className="flex items-center gap-8">
                    <ul
                        className="
                            hidden items-center gap-6
                            text-sm text-zinc-400 md:flex
                        "
                    >
                        {links.map((link) => {
                            const isActive = activeSection === link.id

                            return (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={() => {
                                            if (document.getElementById(link.id)) {
                                                setActiveSection(link.id)
                                            }
                                        }}
                                        aria-current={isActive ? "location" : undefined}
                                        className={`
                                            relative inline-block
                                            transition-all duration-300
                                            hover:-translate-y-0.5
                                            hover:text-white

                                            after:content-['']
                                            after:absolute
                                            after:-bottom-1
                                            after:left-1/2
                                            after:-translate-x-1/2
                                            after:h-[2px]
                                            after:bg-blue-500
                                            after:transition-all
                                            after:duration-300

                                            hover:after:w-full

                                            ${
                                                isActive
                                                    ? "text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.9)] after:w-full"
                                                    : "after:w-0"
                                            }
                                        `}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <ButtonLanguage
                    language={language}
                    setLanguage={setLanguage}
                />
            </nav>
        </header>
    )
}

export default NavBar