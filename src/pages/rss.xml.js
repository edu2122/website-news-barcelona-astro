import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const news = await getCollection('news')

  return rss({
    title: 'FC Barcelona News',
    description: 'Las mejores noticias y recursos sobre el FC Barcelona',
    site: context.site,
    items: news.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/noticias/${post.slug}/`
    })),
    customData: `<language>es-es</language>`
  })
}
