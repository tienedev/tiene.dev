import { ImageResponse } from '@vercel/og';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { slugOf } from '../../lib/slug';

export const prerender = true;

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => data.locale === 'en' && !data.draft);
  return posts.map((post) => ({
    params: { slug: slugOf(post.id) },
    props: { title: post.data.title, date: post.data.date },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { title, date } = props as { title: string; date: Date };
  const dateStr = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#FAFAF9',
          color: '#1A1A1A',
          fontFamily: 'serif',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '18px', fontSize: '26px', letterSpacing: '-0.02em', color: '#6B6B68' },
              children: [
                {
                  type: 'div',
                  props: { style: { width: '18px', height: '18px', background: '#3F3D39', borderRadius: '3px' } },
                },
                'tienedev',
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { fontSize: '78px', lineHeight: 1.08, letterSpacing: '-0.035em', maxWidth: '1000px' },
              children: title,
            },
          },
          {
            type: 'div',
            props: {
              style: { fontSize: '22px', color: '#6B6B68', letterSpacing: '0.02em' },
              children: dateStr,
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 },
  );
};
