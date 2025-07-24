import type { APIRoute } from 'astro'

// Syntax: https://developers.google.com/search/docs/advanced/robots/create-robots-txt
const contents = (baseUrl: URL) => `\
User-agent: *
Allow: /

Sitemap: ${baseUrl.href}/sitemap-index.xml
`

export const GET: APIRoute = ({ site }) => new Response(contents(new URL(import.meta.env.BASE_URL, site)))
