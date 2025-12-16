export default function cloudflareLoader({ src, width, quality }) {
  const { origin, pathname } = new URL(src)
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']

  return `${origin}/cdn-cgi/image/${params.join(',')}${pathname}`
}
