import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join, extname, basename } from 'path'

const worksDir = 'public/assets/img/works'
const portraitSrc = 'public/assets/img/portrait.jpg'

// Convert PNG works images to WebP
const files = await readdir(worksDir)
for (const file of files) {
  if (extname(file).toLowerCase() !== '.png') continue
  const input = join(worksDir, file)
  const output = join(worksDir, basename(file, extname(file)) + '.webp')
  const { size: before } = await import('fs').then(fs => fs.promises.stat(input))
  await sharp(input).webp({ quality: 85 }).toFile(output)
  const { size: after } = await import('fs').then(fs => fs.promises.stat(output))
  console.log(`${file} → ${basename(output)}  ${(before/1024).toFixed(0)} KB → ${(after/1024).toFixed(0)} KB`)
}

// Convert portrait to WebP — two sizes for srcset
const { size: before } = await import('fs').then(fs => fs.promises.stat(portraitSrc))

await sharp(portraitSrc).resize(800, null).webp({ quality: 85 }).toFile('public/assets/img/portrait.webp')
await sharp(portraitSrc).resize(1600, null, { withoutEnlargement: true }).webp({ quality: 85 }).toFile('public/assets/img/portrait@2x.webp')

const { size: s1 } = await import('fs').then(fs => fs.promises.stat('public/assets/img/portrait.webp'))
const { size: s2 } = await import('fs').then(fs => fs.promises.stat('public/assets/img/portrait@2x.webp'))
console.log(`portrait.jpg (${(before/1024).toFixed(0)} KB) → portrait.webp ${(s1/1024).toFixed(0)} KB | portrait@2x.webp ${(s2/1024).toFixed(0)} KB`)
