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
            shadow-lg
            shadow-blue-500/20
        `,

        secondary: `
            border
            border-zinc-700
            bg-zinc-900/50
            text-white
            hover:border-violet-500
            hover:bg-violet-500/10
        `,
    }

    return (
        <button
            onClick={onClick}
            className={`
                flex items-center justify-center
                h-12
                min-w-[140px]
                rounded-xl
                px-6
                font-medium
                cursor-pointer
                transition-all duration-300
                hover:-translate-y-1
                active:scale-95

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

    const toggleLanguage = () => {
        setLanguage(language === "pt" ? "en" : "pt")
    }

    return (
        <button
            onClick={toggleLanguage}
            className="
                relative
                flex
                h-12
                w-28
                items-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-1
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500/40
                hover:bg-white/10
            "
        >
            <div
                className={`
                    absolute
                    top-1
                    h-10
                    w-[48%]
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    shadow-lg
                    shadow-blue-500/10
                    transition-all
                    duration-300

                    ${
                        language === "pt"
                        ? "left-1"
                        : "left-[50%]"
                    }
                `}
            />

            <div className="relative z-10 flex w-full justify-between px-3 text-sm font-semibold">
                <span
                    className={
                        language === "pt"
                        ? "text-white"
                        : "text-zinc-400"
                    }
                >
                    PT
                </span>

                <span
                    className={
                        language === "en"
                        ? "text-white"
                        : "text-zinc-400"
                    }
                >
                    EN
                </span>
            </div>
        </button>
    )
}