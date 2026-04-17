/**
 * Content collection IDs are path-like (e.g. "en/starting.mdx" or "en/starting").
 * We use the last path segment as the public slug.
 */
export const slugOf = (id: string): string => id.split('/').pop() ?? id;
