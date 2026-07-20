import React from 'react';

/** Circular icon button. iconSrc points at assets/icons/*.svg (currentColor not supported in <img>; use invert for dark). */
export function IconButton({iconSrc, label, onDark=false, size=44, onClick, style}) {
  return React.createElement('button',{'aria-label':label,onClick,
    style:{width:size,height:size,borderRadius:'var(--radius-pill)',border:onDark?'1px solid var(--line-dark)':'1px solid var(--line-light)',
      background:onDark?'rgba(255,255,255,.06)':'var(--paper-1)',display:'inline-grid',placeItems:'center',cursor:'pointer',...style}},
    React.createElement('img',{src:iconSrc,alt:'',style:{width:size*0.45,filter:onDark?'invert(1)':'none'}}));
}
