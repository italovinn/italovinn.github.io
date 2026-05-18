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
                border-zinc-800
                bg-zinc-950/80
                backdrop-blur
            "
        >
            <nav
                className="
                    mx-auto
                    flex
                    max-w-7x1
                    items-center
                    justify-between
                    px-6
                    py-4
                "
            >
                <h1
                    className="
                        text-x1
                        font-bol
                        tracking-wide
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
                                    transition
                                    hover:text-blue-500
                                "
                            >
                                {translations.navbar.home}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="
                                    transition
                                    hover:text-violet-500
                                "
                            >
                                {translations.navbar.projects}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="
                                    transition
                                    hover:text-red-500
                                "
                            >
                                {translations.navbar.about}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="
                                    transition
                                    hover:text-white
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