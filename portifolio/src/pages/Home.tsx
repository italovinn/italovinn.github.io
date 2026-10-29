import {Button} from "../components/ui/Button"
import {motion} from "framer-motion"
import italoFoto from "../assets/img/9ca325a5-2629-484e-87b7-a75b2fce8649.jfif"

type HomeProps = {
    translations: any
}

function Home({ translations }: HomeProps){
    return(
        <section
            id="home"
            className="
                relative flex min-h-screen
                scroll-mt-20 items-center
                overflow-hidden
                px-5 pb-12 pt-28
                sm:px-8
                md:py-24
            "
        >
            <div
                className="
                    mx-auto grid w-full max-w-7xl
                    grid-cols-1 items-center
                    gap-10 md:grid-cols-2 md:gap-16
                "
            >

                <motion.div
                    initial={{ opacity: 0, x: -80}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                >
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
                        {translations.home.portfolio}
                    </p>

                    <h1
                        className="
                            text-5xl font-black leading-tight
                            sm:text-6xl
                            md:text-7xl
                            lg:text-8xl
                        "
                    >
                        Ítalo{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Vinhas
                        </span>
                    </h1>

                    <div
                        className="
                            mt-6 h-1
                            w-full max-w-115
                            rounded-full bg-blue-500
                        "
                    />
                    <h2 className="mt-4 text-lg font-medium uppercase tracking-[0.2em] text-zinc-400">
                        {translations.home.principalRole}
                    </h2>

                    <p className="mt-4 text-lg text-zinc-400">
                        {translations.home.role}
                    </p>

                    <p className="mt-2 text-zinc-500">
                        {translations.home.stack}
                    </p>
                    
                    <div className="mt-10 flex items-center justify-start gap-4">
                        <a
                            href="https://github.com/italovinn"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visitar meu GitHub"
                            className="inline-block"
                        >
                            <Button variant="primary">
                                GitHub
                            </Button>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/italovinn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visitar meu LinkedIn"
                            className="inline-block"
                        >
                            <Button variant="secondary">
                                LinkedIn
                            </Button>
                        </a>
                    </div>

                </motion.div>


                <motion.div
                    initial={{opacity: 0, x: 80}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                    className="relative flex justify-center"
                >
                    <div
                        className="
                            absolute h-48 w-48
                            rounded-full bg-blue-500/30
                            blur-3xl
                            sm:h-72 sm:w-72
                        "
                    />

                    <img
                        src={italoFoto}
                        alt="Ítalo Vinhas"
                        className="
                            relative z-10
                            h-60 w-60
                            rounded-full
                            border border-white/10
                            object-cover shadow-2xl
                            sm:h-72 sm:w-72
                            lg:h-80 lg:w-80
                        "
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Home