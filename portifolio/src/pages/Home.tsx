import {Button} from "../components/ui/Button"

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

                <h1 className="text-6xl font-bold text-white">
                    Ítalo Vinhas
                </h1>
                
                <h3 className="mt-2 text-xl font-semibold text-zinc-300">
                    {translations.home.principalRole}
                </h3>

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
            </div>
        </section>
    )
}

export default Home