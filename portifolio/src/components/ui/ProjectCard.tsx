import { useState } from "react"
import { motion } from "framer-motion"
import {
    Terminal,
    Code2,
    LayoutDashboard,
} from "lucide-react"

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
    languages?: string[]
    frameworks?: string[]
}

type ProjectCardProps = {
    project: GitHubProject
    translations: any
}


type PreviewType = "terminal" | "code" | "dashboard"

function getPreviewType(project: GitHubProject): PreviewType {
    const languages = new Set(
        [project.language, ...(project.languages ?? [])]
            .filter((value): value is string => Boolean(value))
            .map((value) => value.toLowerCase())
    )

    const frameworks = new Set(
        (project.frameworks ?? []).map((value) => value.toLowerCase())
    )

    const metadata = [
        project.name,
        project.description ?? "",
        ...(project.topics ?? []),
    ].join(" ").toLowerCase()

    const has = (language: string) => languages.has(language)

    // Interfaces Python
    if (
        frameworks.has("streamlit") ||
        frameworks.has("tkinter") ||
        frameworks.has("customtkinter") ||
        /\b(streamlit|tkinter|customtkinter)\b/.test(metadata)
    ) {
        return "dashboard"
    }

    // Sites com HTML, CSS, JavaScript, React ou TypeScript
    if (
        has("html") ||
        frameworks.has("react") ||
        frameworks.has("vite") ||
        frameworks.has("next.js") ||
        (
            has("css") &&
            (has("javascript") || has("typescript"))
        ) ||
        (
            (has("javascript") || has("typescript")) &&
            /\b(frontend|front-end|website|webapp|web-app)\b/.test(metadata)
        )
    ) {
        return "dashboard"
    }

    // Projetos executados no terminal
    if (
        has("python") ||
        has("shell") ||
        has("powershell") ||
        has("batchfile")
    ) {
        return "terminal"
    }

    return "code"
}


function ProjectPreview({ project }: { project: GitHubProject }) {
    const type = getPreviewType(project)
    const language = project.language || "Code"

    return (
        <div
            className="
                mb-6 overflow-hidden rounded-xl
                border border-white/10
                bg-[#0d1117]
            "
        >
            <div
                className="
                    flex items-center justify-between
                    border-b border-white/10
                    bg-zinc-800/60 px-4 py-3
                "
            >
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                    <span className="h-2 w-2 rounded-full bg-green-400/80" />
                </div>

                <span className="max-w-[65%] truncate text-xs text-zinc-500">
                    {project.name}
                </span>

                {type === "terminal" ? (
                    <Terminal size={15} className="text-blue-400" />
                ) : type === "dashboard" ? (
                    <LayoutDashboard size={15} className="text-blue-400" />
                ) : (
                    <Code2 size={15} className="text-blue-400" />
                )}
            </div>

            <div className="flex h-44 flex-col justify-center overflow-hidden p-4">
                {type === "terminal" && (
                    <div className="space-y-3 font-mono text-xs">
                        <p className="text-blue-400">
                            $ {language.toLowerCase() === "python"
                                ? "python main.py"
                                : "run project"}
                        </p>

                        <p className="text-zinc-400">
                            {">"} Initializing process...
                        </p>

                        <p className="text-green-400">
                            ✓ Process completed
                        </p>

                        <p className="text-zinc-500">
                            $ <span className="animate-pulse">_</span>
                        </p>
                    </div>
                )}

                {type === "code" && (
                    <div className="space-y-2 font-mono text-xs">
                        <p className="text-zinc-500">
                            // {language} project
                        </p>

                        <p>
                            <span className="text-purple-400">
                                const
                            </span>{" "}
                            <span className="text-blue-300">
                                project
                            </span>{" "}
                            <span className="text-zinc-300">
                                = {"{"}
                            </span>
                        </p>

                        <p className="pl-4 text-green-400">
                            name: "{project.name}",
                        </p>

                        <p className="pl-4 text-cyan-300">
                            language: "{language}"
                        </p>

                        <p className="text-zinc-300">
                            {"}"}
                        </p>
                    </div>
                )}

                {type === "dashboard" && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="h-3 w-24 rounded bg-blue-400/70" />
                            <div className="h-5 w-14 rounded bg-blue-500/20" />
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="
                                        space-y-2 rounded-md
                                        border border-white/10
                                        bg-zinc-800/60 p-3
                                    "
                                >
                                    <div className="h-2 w-full rounded bg-zinc-600/50" />
                                    <div className="h-2 w-2/3 rounded bg-blue-500/60" />
                                </div>
                            ))}
                        </div>

                        <div className="flex h-14 items-end gap-2">
                            {[35, 65, 45, 85, 55, 100, 70, 90].map(
                                (height, index) => (
                                    <div
                                        key={index}
                                        style={{ height: `${height}%` }}
                                        className="
                                            flex-1 rounded-t
                                            bg-gradient-to-t
                                            from-blue-700 to-cyan-400
                                            opacity-80
                                        "
                                    />
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

function ProjectCard({ project, translations }: ProjectCardProps) {
    const [previewFailed, setPreviewFailed] = useState(false)

    const previewUrl =
        `${import.meta.env.BASE_URL}previews/${encodeURIComponent(project.name.toLowerCase())}.png`

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
        {!previewFailed ? (
            <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
                <img
                    key={previewUrl}
                    src={previewUrl}
                    alt={`Interface real do projeto ${project.name}`}
                    loading="lazy"
                    onError={() => setPreviewFailed(true)}
                    className="h-44 w-full object-cover object-top"
                />
            </div>
        ) : (
            <ProjectPreview project={project} />
        )}

            <div className="mb-4 flex items-start justify-between gap-3">
                <h3
                    className="
                        break-words text-xl font-bold text-white
                        transition-colors group-hover:text-blue-400
                    "
                >
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
                    <span
                        className="
                            rounded-full border border-blue-500/20
                            bg-blue-500/10 px-3 py-1
                            text-xs text-blue-400
                        "
                    >
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

            <div
                className="
                    flex flex-wrap items-center gap-4
                    border-t border-white/10 pt-4
                "
            >
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
