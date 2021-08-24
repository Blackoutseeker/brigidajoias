import { NextApiRequest, NextApiResponse } from 'next'
import { PAGE_ROUTES, PRODUCTS_TYPES } from '@utils/constants'
const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

interface SitemapParams {
  url: string
  changefreq: string
  priority: number
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const productsPageRoute = PAGE_ROUTES.PRODUCTS

  const productsTypesLinks: SitemapParams[] = []
  const removeRouteAllProducts: string[] = PRODUCTS_TYPES.filter(
    productType => productType !== 'Todos'
  )
  removeRouteAllProducts.forEach(productType => {
    productsTypesLinks.push({
      url: `${productsPageRoute}/${productType}`,
      changefreq: 'daily',
      priority: 1
    })
  })

  const links: SitemapParams[] = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/location', changefreq: 'daily', priority: 1 },
    { url: '/sellers', changefreq: 'daily', priority: 1 },
    ...productsTypesLinks
  ]

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` })
  res.writeHead(200, {
    'Content-Type': 'application/xml'
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: { toString: () => any }) => data.toString())
  res.end(xmlString)
}
