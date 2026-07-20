import React from 'react';

/** Small mono industry/category tag ("Finance", "Healthcare"). */
export function Tag({label, onDark=false, active=false, style}) {
  return React.createElement('span',{style:{display:'inline-block',padding:'5px 12px',borderRadius:'var(--radius-chip)',
    fontFamily:'var(--font-mono)',fontSize:12,letterSpacing:'0.03em',
    background:active?'var(--accent)':onDark?'rgba(255,255,255,.08)':'var(--paper-2)',
    color:active?'#fff':onDark?'var(--text-on-dark)':'var(--text-ink)',
    border:onDark&&!active?'1px solid var(--line-dark)':'none',...style}},label);
}
