import { motion } from "framer-motion"

export type GitHubProject = {
    id: number
    name: string
    description: string | null
    html_url: string
    homepage: string | null
    language: string | null
    topics: string[]
    stargazers_count: number
    fork: boolean
    archived: boolean
}

type ProjectCardProps = {
    project: GitHubProject
    translations: any
}

function ProjectCard({ project, translations }: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="
                group flex h-full flex-col
                rounded-2xl border border-white/10
                bg-zinc-900/50 p-6
                backdrop-blur-md
                transition-colors duration-300
                hover:border-blue-500/50
                hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]
            "
        >
            <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="
                    break-words text-xl font-bold text-white
                    transition-colors group-hover:text-blue-400
                ">
                    {project.name.replace(/[-_]/g, " ")}
                </h3>

                <span className="shrink-0 text-sm text-zinc-500">
                    ★ {project.stargazers_count}
                </span>
            </div>

            <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description || translations.project.noDescription}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
                {project.language && (
                    <span className="
                        rounded-full border border-blue-500/20
                        bg-blue-500/10 px-3 py-1
                        text-xs text-blue-400
                    ">
                        {project.language}
                    </span>
                )}

                {project.topics?.slice(0, 4).map((topic) => (
                    <span
                        key={topic}
                        className="
                            rounded-full border border-white/10
                            bg-white/5 px-3 py-1
                            text-xs text-zinc-300
                        "
                    >
                        {topic}
                    </span>
                ))}
            </div>

            <div className="
                flex flex-wrap items-center gap-4
                border-t border-white/10 pt-4
            ">
                <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        text-sm font-semibold text-blue-400
                        transition-colors hover:text-blue-300
                    "
                >
                    {translations.project.viewCode} ↗
                </a>

                {project.homepage?.startsWith("https://") && (
                    <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-sm font-semibold text-zinc-300
                            transition-colors hover:text-white
                        "
                    >
                        {translations.project.viewProject} ↗
                    </a>
                )}
            </div>
        </motion.article>
    )
}

export default ProjectCard