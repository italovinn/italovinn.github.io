type ButtonProps ={
    children: React.ReactNode
    onClick?: () => void
    variant?: "primary" | "secondary"
}

export function Button({
    children,
    onClick,
    variant = "primary",
}: ButtonProps) {

    const variants = {
        primary: `
            bg-blue-600
            hover:bg-blue-500
            text-white
        `,

        secondary: `
            border
            border-zinc-700
            bg-zinc-900/50
            text-white
            hover: border-violet-500
            hover: bg-violet-500/10
        `,
    }

    return (
        <button
            onClick={onClick}
            className={`
                rounded-xl
                px-6
                py-3
                font-medium
                transitions
                ${variants[variant]}
            `}
        >
            {children}
        </button>
    )
}

type ButtonLanguageProps = {
    language: string
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export function ButtonLanguage({
    language,
    setLanguage,
}: ButtonLanguageProps) {
    return (
        <button
            onClick={() =>
                setLanguage(language === "pt" ? "en" : "pt")
            }
            className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                via-violet-600
                px-4
                py-2
                text-sm
                font-medium
                shadow-lg
                shadow-blue-500/10
                transition
                hover:scale-105
            "
        >
            <span
                className ={
                    language === "pt"
                    ? "text-white"
                    : "text-white/50"
                }
            >
                PT
            </span>

            <span
                className={
                    "text-white/40"
                }
            >
                |
            </span>

            <span
                className={
                    language === "en"
                    ? "text-white"
                    : "text-white/50"
                }
            >
                EN
            </span>
        </button>
    )
}