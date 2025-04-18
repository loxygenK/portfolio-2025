import type { Level, Tech } from "./type";

// biome-ignore format: Each elements have small amount of characters and
//                      spreading them into individual lines would make data hard to follow
export const techs: Record<Level, Tech[]> = {
  "okay": [
    tech("*React"), tech("*Next.js 14 / 15"), tech("CSS"), tech("SCSS"),
    tech("Panda CSS"), tech("Tailwind CSS"),
    tech("*TypeScript"), tech("JavaScript"),
    tech("Python"), tech("*Git"), tech("*GitHub"), tech("*GitHub Action"),
    tech("*Figma"), tech("Notion"),
  ],
  "interested": [
    tech("Shell script"), tech("Linux"), tech("Docker"), tech("Docker Compose"),
    tech("STUDIO"), tech("Rust"), tech("Layered Architecture"), tech("Autodesk Fusion 360"),
  ],
  "for-reference": [
    tech("TypeORM"), tech("NestJS"),
  ],
}

// biome-ignore format: Each elements have small amount of characters and
//                      spreading them into individual lines would make data hard to follow
export const utilities = [
  tech("Neovim"), tech("lazygit"), tech("Zellij"), tech("Starship"),
  tech("MBA (M1 2020)"), tech("GPT-4o"), tech("GPT-o3"), tech("Lily58 Pro"), tech("ERGO M575"),
]

function tech(name: string): Tech {
  return name.startsWith("*")
    ? { name: name.substring(1), prefer: true }
    : { name: name, prefer: false };
}
