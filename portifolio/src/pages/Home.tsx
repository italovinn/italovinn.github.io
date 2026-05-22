import {Button} from "../components/ui/Button"
import {motion} from "framer-motion"
import italoFoto from "../assets/img/9ca325a5-2629-484e-87b7-a75b2fce8649.jfif"

type HomeProps = {
    translations: any
}

function Home({ translations }: HomeProps){
    return(
        <section className="relative flex min-h-screen items-center overflow-hidden px-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">

                <motion.div
                    initial={{ opacity: 0, x: -80}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                >
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
                        {translations.home.portfolio}
                    </p>

                    <h1 className="text-6xl font-black leading-none md:text-7xl lg:text-8xl">
                        Ítalo{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Vinhas
                        </span>
                    </h1>

                    <div className="mt-6 h-1 w-115 rounded-full bg-blue-500" />

                    <h2 className="mt-4 text-lg font-medium uppercase tracking-[0.2em] text-zinc-400">
                        {translations.home.principalRole}
                    </h2>

                    <p className="mt-4 text-lg text-zinc-400">
                        {translations.home.role}
                    </p>

                    <p className="mt-2 text-zinc-500">
                        {translations.home.stack}
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <Button variant="primary">
                            GitHub
                        </Button>

                        <Button variant="secondary">
                            LinkedIn
                        </Button>
                    </div>
                </motion.div>


                <motion.div
                    initial={{opacity: 0, x: 80}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                    className="relative flex justify-center"
                >
                    <div className="absolute h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />

                    <img
                        src={italoFoto}
                        alt="Ítalo Vinhas"
                        className="relative z-10 h-80 w-80 rounded-full border border-white/10 object-cover shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Home