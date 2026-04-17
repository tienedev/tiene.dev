interface BlogPostingInput {
  title: string;
  description: string;
  url: string;
  date: Date;
  image: string;
  authorName: string;
}

interface BlogPostingLd {
  '@context': 'https://schema.org';
  '@type': 'BlogPosting';
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  image: string;
  author: { '@type': 'Person'; name: string };
  mainEntityOfPage: { '@type': 'WebPage'; '@id': string };
}

export function buildBlogPosting(input: BlogPostingInput): BlogPostingLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: input.date.toISOString().slice(0, 10),
    image: input.image,
    author: { '@type': 'Person', name: input.authorName },
    mainEntityOfPage: { '@type': 'WebPage', '@id': input.url },
  };
}
