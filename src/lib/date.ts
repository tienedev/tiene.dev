export const fmtShortDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });

export const fmtLongDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
