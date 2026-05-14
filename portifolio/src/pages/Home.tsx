type HomeProps = {
    translations: any
}

function Home({ translations }: HomeProps){
    return(
        <section className="flex min-h-screen items-center justify-center pt-24">
            <div className="text-center">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
                    {translations.home.portfolio}
                </p>

                <h1 className="text-6x1 font-bolt text-white">
                    Ítalo Vinhas
                </h1>

                <p className="mt-6 text-lg text-zinc-400">
                    {translations.home.role}
                </p>

                <p className="mt-2 text-zinc-500">
                    {translations.home.stack}
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <button
                        className="
                            rounded-x1
                            bg-blue-600
                            px-6
                            py-3
                            font-medium
                            text-white
                            transition
                            hover:bg-blue-500
                        "
                    >
                        GitHub
                    </button>

                    <button
                        className="
                            rounded-x1
                            border
                            border-zinc-700
                            px-5
                            py-3
                            font-medium
                            text-white
                            transition
                            hover:border-violet-500
                            hover:bg-violet-500/10
                        "
                    >
                        LinkedIn
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home