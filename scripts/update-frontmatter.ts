import fs from 'node:fs'

function updateFileFrontmatter(files = process.argv.slice(2)) {
  const today = new Date().toISOString().split('T')[0]

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf-8')
      const frontmatterRegex = /^---\n([\s\S]*?)\n---/
      const match = content.match(frontmatterRegex)

      if (!match || content.includes('Template Article')) continue

      let frontmatter = match[1]
      const lastUpdatedRegex = /^lastUpdated:.*$/m

      if (!lastUpdatedRegex.test(frontmatter)) continue

      const lastUpdatedMatch = frontmatter.match(lastUpdatedRegex)
      if (!lastUpdatedMatch) continue

      const currentLine = lastUpdatedMatch[0]
      const newLine = `lastUpdated: ${today}`

      if (currentLine === newLine) continue

      frontmatter = frontmatter.replace(lastUpdatedRegex, newLine)
      content = content.replace(frontmatterRegex, `---\n${frontmatter}\n---`)
      fs.writeFileSync(file, content)
      globalThis.console.log(`Updated lastUpdated date in ${file}`)
    } catch (err) {
      console.error(`Error processing ${file}:`, err)
    }
  }
}

updateFileFrontmatter()
