module.exports = {
  "*.{md,css}": "prettier --list-different --ignore-unknown --write",
  "**/*.{tsx,ts,jsx,js}": ["pnpm lint"],
}
