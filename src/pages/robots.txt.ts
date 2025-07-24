import type { APIRoute } from 'astro'

// Syntax: https://developers.google.com/search/docs/advanced/robots/create-robots-txt
const contents = (url: URL) => `\
User-agent: *
Allow: /

Sitemap: ${url.href}
`

export const GET: APIRoute = ({ site }) => new Response(contents(new URL('sitemap.xml', site)))
