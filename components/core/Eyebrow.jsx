import React from 'react';

/** Uppercase mono eyebrow label ("OPEN SOURCE"). */
export function Eyebrow({label, onDark=false, style}) {
  return React.createElement('div',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--text-eyebrow)',
    letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',
    color:onDark?'var(--text-on-dark-2)':'var(--text-muted)',...style}},label);
}
