
import { mkdir, writeFile } from "node:fs/promises"

const username = "italovinn"
const token = process.env.GITHUB_TOKEN

const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
}
const projects = []

for (let page = 1; page <= 10; page++) {
    const url =
        `https://api.github.com/users/${username}/repos` +
        `?sort=updated&per_page=100&page=${page}`

    const response = await fetch(url, { headers })

    if (!response.ok) {
        throw new Error(`GitHub API: ${response.status}`)
    }

    const data = await response.json()

    projects.push(
        ...data.filter(
            (project) => !project.fork && !project.archived
        ).map((project) => ({
            id: project.id,
            name: project.name,
            description: project.description,
            html_url: project.html_url,
            homepage: project.homepage,
            language: project.language,
            topics: project.topics ?? [],
            stargazers_count: project.stargazers_count,
            fork: project.fork,
            archived: project.archived,
        }))
    )

    if (data.length < 100) break
}

await mkdir("public", { recursive: true })

await writeFile(
    "public/projects.json",
    JSON.stringify(projects, null, 2)
)

console.log(`${projects.length} projetos salvos`)
