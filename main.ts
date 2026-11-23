import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const story = "Granny's kettle whistled. Nobody poured tea.";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, story, "utf8");
