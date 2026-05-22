import {ButtonLanguage} from "../ui/Button"

type NavBarProps = {
    translations: any
    language: string
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}

function NavBar({
    translations,
    language,
    setLanguage,
} : NavBarProps) {
    return (
        <header
            className="
                fixed
                top-0
                z-50
                w-full
                border-b
                border-white/10
                bg-black/30
                backdrop-blur-xl
                shadow-lg
                shadow-black/20
            "
        >
            <nav
                className="
                    mx-auto
                    flex
                    max-w-7xl
                    items-center
                    justify-between
                    px-6
                    py-5
                "
            >
                <h1
                    className="
                        text-xl
                        font-black
                        tracking-tight
                        text-white
                    "
                >
                    Ítalo Vinhas
                </h1>

                <div className="flex items-center gap-8">
                    <ul
                        className="
                            hidden
                            items-center
                            gap-6
                            text-sm
                            text-zinc-400
                            md:flex
                        "
                    >
                        <li>
                            <a
                                href="#"
                                className="
                                    ttransition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:text-white

                                    after:absolute
                                    after:-bottom-1
                                    after:left-0
                                    after:h-[2px]
                                    after:w-0
                                    after:bg-blue-500
                                    after:transition-all
                                    after:duration-300

                                    hover:after:w-full
                                "
                            >
                                {translations.navbar.home}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:text-white

                                    after:absolute
                                    after:-bottom-1
                                    after:left-0
                                    after:h-[2px]
                                    after:w-0
                                    after:bg-blue-500
                                    after:transition-all
                                    after:duration-300

                                    hover:after:w-full
                                "
                            >
                                {translations.navbar.projects}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:text-white

                                    after:absolute
                                    after:-bottom-1
                                    after:left-0
                                    after:h-[2px]
                                    after:w-0
                                    after:bg-blue-500
                                    after:transition-all
                                    after:duration-300

                                    hover:after:w-full
                                "
                            >
                                {translations.navbar.about}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:text-white

                                    after:absolute
                                    after:-bottom-1
                                    after:left-0
                                    after:h-[2px]
                                    after:w-0
                                    after:bg-blue-500
                                    after:transition-all
                                    after:duration-300

                                    hover:after:w-full
                                "
                            >
                                {translations.navbar.contact}
                            </a>
                        </li>
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