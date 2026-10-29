import { motion } from "framer-motion"
import {
    GraduationCap,
    BriefcaseBusiness,
    Code2,
    Database,
} from "lucide-react"

type AboutProps = {
    translations: any
}

function About({ translations }: AboutProps) {
    const about = translations.about

    const cards = [
        {
            icon: GraduationCap,
            title: about.educationTitle,
            value: about.educationValue,
        },
        {
            icon: BriefcaseBusiness,
            title: about.experienceTitle,
            value: about.experienceValue,
        },
        {
            icon: Code2,
            title: about.focusTitle,
            value: about.focusValue,
        },
        {
            icon: Database,
            title: about.technologiesTitle,
            value: about.technologiesValue,
        },
    ]

    return (
        <section
            id="about"
            className="
                relative mx-auto max-w-7xl
                scroll-mt-20 px-6 py-24
            "
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-14 text-center"
            >
                <p className="
                    text-sm font-semibold uppercase
                    tracking-[0.3em] text-blue-500
                ">
                    {about.label}
                </p>

                <h2 className="
                    mt-4 text-4xl font-black
                    text-white md:text-5xl
                ">
                    {about.title}
                </h2>

                <div className="
                    mx-auto mt-5 h-1 w-16
                    rounded-full bg-blue-500
                " />
            </motion.div>

            <div className="
                grid grid-cols-1 items-center
                gap-12 lg:grid-cols-2
            ">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6"
                >
                    <h3 className="
                        text-3xl font-bold text-white
                    ">
                        {about.greeting}
                    </h3>

                    <p className="leading-8 text-zinc-400">
                        {about.description}
                    </p>

                    <p className="leading-8 text-zinc-400">
                        {about.experience}
                    </p>

                    <p className="leading-8 text-zinc-400">
                        {about.objective}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                    {cards.map((card) => {
                        const Icon = card.icon

                        return (
                            <motion.div
                                key={card.title}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.25 }}
                                className="
                                    group rounded-2xl
                                    border border-white/10
                                    bg-zinc-900/50 p-6
                                    backdrop-blur-md
                                    transition-colors duration-300
                                    hover:border-blue-500/50
                                    hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]
                                "
                            >
                                <Icon
                                    size={28}
                                    className="
                                        mb-4 text-blue-400
                                        transition-transform duration-300
                                        group-hover:scale-110
                                    "
                                />

                                <h4 className="
                                    mb-2 text-lg font-bold
                                    text-white
                                ">
                                    {card.title}
                                </h4>

                                <p className="text-sm text-zinc-400">
                                    {card.value}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default About