import React from 'react';

/** Scrolling single-color logo marquee. Real customer marks are not bundled; pass names as placeholders. */
export function LogoWall({names=['Customer','Customer','Customer','Customer','Customer','Customer'], onDark=false, speed=30, style}) {
  const row=names.map((n,i)=>React.createElement('span',{key:i,style:{fontFamily:'var(--font-mono)',fontSize:13,letterSpacing:'0.1em',
    textTransform:'uppercase',opacity:.55,whiteSpace:'nowrap',padding:'0 36px',
    color:onDark?'var(--text-on-dark)':'var(--text-ink)'}},n));
  return React.createElement('div',{style:{overflow:'hidden',maskImage:'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',...style}},
    React.createElement('style',null,'@keyframes pl-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}'),
    React.createElement('div',{style:{display:'inline-flex',alignItems:'center',animation:'pl-marquee '+speed+'s linear infinite'}},row,row));
}
