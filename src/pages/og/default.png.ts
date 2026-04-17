import { ImageResponse } from '@vercel/og';
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async () => {
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
              style: { display: 'flex', alignItems: 'center', gap: '18px', fontSize: '28px', letterSpacing: '-0.02em' },
              children: [
                {
                  type: 'div',
                  props: { style: { width: '22px', height: '22px', background: '#3F3D39', borderRadius: '3px' } },
                },
                'tienedev',
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { fontSize: '76px', lineHeight: 1.1, letterSpacing: '-0.035em', maxWidth: '880px' },
              children: 'Technical notes from an independent developer.',
            },
          },
          {
            type: 'div',
            props: {
              style: { fontSize: '22px', color: '#6B6B68', letterSpacing: '0.02em' },
              children: 'tienedev.com',
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 },
  );
};
