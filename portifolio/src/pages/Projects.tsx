import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ProjectCard, {
    type GitHubProject,
} from "../components/ui/ProjectCard"

type ProjectProps = {
    translations: any
}

function Projects({ translations }: ProjectProps) {
    const [projects, setProjects] = useState<GitHubProject[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        async function fetchProjects() {
            try {
                setLoading(true)
                setError(false)

                const response = await fetch(
                    `${import.meta.env.BASE_URL}projects.json`,
                    { signal: controller.signal }
                )

                if (!response.ok) {
                    throw new Error(
                        `Erro ao carregar projects.json: ${response.status}`
                    )
                }

                const data: GitHubProject[] = await response.json()

                if (!Array.isArray(data)) {
                    throw new Error("Formato inválido de projects.json")
                }

                setProjects(data)
            } catch (err) {
                if (controller.signal.aborted) return

                console.error("Erro ao carregar projetos:", err)
                setError(true)
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        fetchProjects()

        return () => controller.abort()
    }, [])



    return (
        <section
            id="projects"
            className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-24"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                    {translations.project.portfolio}
                </span>

                <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                    {translations.project.title}
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                    {translations.project.description}
                </p>
            </motion.div>

            {loading && (
                <p role="status" className="py-20 text-center text-zinc-400">
                    {translations.project.loading}
                </p>
            )}

            {error && (
                <p role="alert" className="py-12 text-center text-red-400">
                    {translations.project.error}
                </p>
            )}

            {!loading && !error && projects.length === 0 && (
                <p className="py-12 text-center text-zinc-400">
                    {translations.project.empty}
                </p>
            )}

            {!loading && !error && projects.length > 0 && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            translations={translations}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Projects