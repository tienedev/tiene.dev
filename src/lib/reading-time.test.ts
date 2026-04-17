import { describe, expect, it } from 'vitest';
import { readingTime } from './reading-time';

describe('readingTime', () => {
  it('returns at least 1 minute for empty or very short input', () => {
    expect(readingTime('')).toBe(1);
    expect(readingTime('hello world')).toBe(1);
  });

  it('rounds to nearest minute at 220 wpm', () => {
    const body = 'word '.repeat(440).trim(); // ~2 minutes
    expect(readingTime(body)).toBe(2);
  });

  it('ignores extra whitespace', () => {
    const body = `   foo\n\n   bar\t\tbaz   `;
    expect(readingTime(body)).toBe(1);
  });
});
