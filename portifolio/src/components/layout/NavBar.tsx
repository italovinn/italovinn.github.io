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
        <nav>
            <h1>Ítalo Vinhas</h1>
            <button
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            >
                {language === "pt" ? "EN" : "PT"}
            </button>
        </nav>
    )
}

export default NavBar