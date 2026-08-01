import fs from "node:fs";
import path from "node:path";
import { GameProjectsContent } from "@/components/sections/GameProjectsContent";
import { games } from "@/data/games";

/**
 * Server component: checks on disk whether each game's screenshot exists
 * before asking the client component to render it — missing images fall
 * back to the elegant gradient placeholder instead of a broken <img>.
 * Existing game links/data are untouched either way.
 */
export function GameProjects() {
  const entries = games.map((game) => {
    let imageAvailable = false;
    if (game.image) {
      const filePath = path.join(process.cwd(), "public", game.image);
      try {
        imageAvailable = fs.existsSync(filePath);
      } catch {
        imageAvailable = false;
      }
    }
    return { ...game, imageAvailable };
  });

  return <GameProjectsContent games={entries} />;
}
