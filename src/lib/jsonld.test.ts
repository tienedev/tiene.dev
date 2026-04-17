import { describe, expect, it } from 'vitest';
import { buildBlogPosting } from './jsonld';

describe('buildBlogPosting', () => {
  it('emits the required schema.org fields', () => {
    const ld = buildBlogPosting({
      title: 'Starting',
      description: 'Why this site exists.',
      url: 'https://tiene.dev/articles/starting',
      date: new Date('2026-04-15T00:00:00Z'),
      image: 'https://tiene.dev/og/starting.png',
      authorName: 'tiene.dev',
    });

    expect(ld['@context']).toBe('https://schema.org');
    expect(ld['@type']).toBe('BlogPosting');
    expect(ld.headline).toBe('Starting');
    expect(ld.description).toBe('Why this site exists.');
    expect(ld.url).toBe('https://tiene.dev/articles/starting');
    expect(ld.datePublished).toBe('2026-04-15');
    expect(ld.image).toBe('https://tiene.dev/og/starting.png');
    expect(ld.author).toEqual({ '@type': 'Person', name: 'tiene.dev' });
    expect(ld.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': 'https://tiene.dev/articles/starting',
    });
  });

  it('formats dates as ISO YYYY-MM-DD regardless of time component', () => {
    const ld = buildBlogPosting({
      title: 't',
      description: 'd',
      url: 'https://x.test/a',
      date: new Date('2026-01-09T23:59:59Z'),
      image: 'https://x.test/og.png',
      authorName: 'x',
    });
    expect(ld.datePublished).toBe('2026-01-09');
  });
});
