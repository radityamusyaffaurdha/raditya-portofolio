import { GitHubActivityContent } from "@/components/sections/GitHubActivityContent";
import type { GitHubRepo } from "@/types";

const GITHUB_USERNAME = "radityamusyaffaurdha";

interface RawGitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

/**
 * Fetched server-side at request/build time — this section works out of
 * the box against the public GitHub REST API (no token required for this
 * volume of requests). If the API is unreachable or the account has no
 * public repos yet, it falls back to a clean showcase card that's easy
 * to wire up to real data later.
 */
async function getRepos(): Promise<GitHubRepo[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return null;

    const data: RawGitHubRepo[] = await res.json();
    return data
      .filter((repo) => !repo.fork)
      .slice(0, 6)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        htmlUrl: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
        updatedAt: repo.updated_at,
      }));
  } catch {
    return null;
  }
}

export async function GitHubActivity() {
  const repos = await getRepos();
  return <GitHubActivityContent repos={repos} username={GITHUB_USERNAME} />;
}
