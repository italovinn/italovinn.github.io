
import { motion } from "framer-motion"
import {
    MessageCircle,
    Mail,
    Phone,
    ArrowUpRight,
} from "lucide-react"

type ContactProps = {
    translations: any
}

function Contact({ translations }: ContactProps) {
    const contact = translations.contact

    const contacts = [
        {
            icon: MessageCircle,
            title: contact.whatsappTitle,
            value: "+55 (31) 98341-1387",
            button: contact.whatsappButton,
            link: "https://wa.me/5531983411387",
        },
        {
            icon: Mail,
            title: contact.emailTitle,
            value: "italovinhas@icloud.com",
            button: contact.emailButton,
            link: "mailto:italovinhas@icloud.com",
        },
        {
            icon: Phone,
            title: contact.phoneTitle,
            value: "+55 (31) 98341-1387",
            button: contact.phoneButton,
            link: "tel:+5531983411387",
        },
    ]

    return (
        <section
            id="contact"
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
                    {contact.label}
                </p>

                <h2 className="
                    mt-4 text-4xl font-black
                    text-white md:text-5xl
                ">
                    {contact.title}
                </h2>

                <div className="
                    mx-auto mt-5 h-1 w-16
                    rounded-full bg-blue-500
                " />

                <p className="
                    mx-auto mt-6 max-w-2xl
                    text-zinc-400 leading-relaxed
                ">
                    {contact.description}
                </p>
            </motion.div>

            <div className="
                grid grid-cols-1 gap-6
                md:grid-cols-3
            ">
                {contacts.map((item, index) => {
                    const Icon = item.icon

                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.12,
                            }}
                            whileHover={{ y: -6 }}
                            className="
                                group flex flex-col
                                rounded-2xl
                                border border-white/10
                                bg-zinc-900/50 p-7
                                backdrop-blur-md
                                transition-colors duration-300
                                hover:border-blue-500/50
                                hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]
                            "
                        >
                            <div className="
                                mb-6 flex h-14 w-14
                                items-center justify-center
                                rounded-xl bg-blue-500/10
                                text-blue-400
                            ">
                                <Icon size={28} />
                            </div>

                            <h3 className="
                                mb-2 text-xl font-bold
                                text-white
                            ">
                                {item.title}
                            </h3>

                            <p className="
                                mb-8 break-all
                                text-sm text-zinc-400
                            ">
                                {item.value}
                            </p>

                            <a
                                href={item.link}
                                target={
                                    item.link.startsWith("https://")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    item.link.startsWith("https://")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="
                                    mt-auto flex items-center
                                    justify-center gap-2
                                    rounded-xl bg-blue-600
                                    px-4 py-3
                                    text-sm font-semibold
                                    text-white
                                    transition-all duration-300
                                    hover:bg-blue-500
                                    hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                                "
                            >
                                {item.button}
                                <ArrowUpRight size={17} />
                            </a>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default Contact
